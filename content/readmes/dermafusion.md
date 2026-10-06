Multi-source deep learning for **8-class skin-lesion classification** (MEL, NV, BCC, AKIEC, BKL, DF, VASC, OTHER), trained on four public dermatology datasets and deployed as both a Gradio research demo and a native iOS app.

**DermaFusion is an educational and research tool — not a medical device, not FDA approved, and not a substitute for professional medical advice.**

## Headline results

Final E0 + E3 soft-vote ensemble (EfficientNet-B4 × 2, 380 × 380), TEST set n = 5,279, 1,000-iter bootstrap 95 % CI:

| Metric | Value (95 % CI) |
|---|---|
| 8-class Balanced Accuracy | 0.540 [0.509, 0.568] |
| 8-class Macro F1 | 0.469 [0.441, 0.495] |
| Top-1 / Top-2 / Top-3 accuracy | 0.778 / 0.907 / 0.954 |
| Binary-malignant AUROC | 0.830 |
| Sensitivity @ 95 % specificity | 0.462 |

## Architecture summary

| Stage | Description |
|---|---|
| **Data** | ISIC 2018 / 2019 / 2020 + PAD-UFES-20 → 61,694 dermoscopic + smartphone images, 8 unified classes |
| **Splits** | Patient-grouped (`GroupShuffleSplit` on `patient_id → lesion_id`) + iterative leakage enforcement → TRAIN 52,483 / VAL 3,932 / TEST 5,279, **zero patient/lesion overlap** |
| **Preprocessing** | Shades-of-Gray (power = 6) + DullRazor + 380 × 380 |
| **Backbone** | EfficientNet-B4 (~17.6 M params) — two members trained from different starting points |
| **E0** | `efficientnet_b4`, CB-Focal (γ = 1.5) + MixUp + TrivialAugmentWide + EMA 0.999, √-inv sampler |
| **E3** | `tf_efficientnet_b4.ns_jft_in1k`, class-balanced focal (γ = 2.0), full-inverse sampler |
| **Ensemble** | Soft-vote, Dirichlet-optimised weights `[0.705, 0.295]`, per-class thresholds tuned on VAL macro-F1 |
| **Deployment** | Gradio (single 142 MB ensemble bundle) + iOS (two FP16 `.mlpackage` files, 34 MB each) |

## iOS app: how it works

1. **Capture / import** a close-up of a skin lesion (camera with guided framing, tap-to-focus, macro-lens preference; or photo library).
2. **Preflight** (`LesionPreflight`) — Vision structural detectors (text / face / animal / barcode) + a color/quality sanity gate. Non-lesion photos are rejected with actionable guidance before inference.
3. **Inference** — an on-device EfficientNet-B4 soft-vote ensemble (`E0` + `E3`) produces a probability distribution over 8 lesion categories. Everything runs locally via Core ML / the Apple Neural Engine; nothing is uploaded.
4. **Results** — probability chart, malignant-risk gauge, and a Grad-CAM-style attention overlay; optional PDF export; local scan history (SwiftData, file-protected, excluded from iCloud backups).

## Privacy

No accounts, no networking code, no analytics / telemetry / ads / third-party SDKs. Images and results stay on the device.

## Clinical readiness gates

Full-split validation runs against the deployment bundle, and a readiness report turns the results into pass/fail checks. The default `screening_v1` profile checks sample size, top-1 / balanced accuracy / macro-F1, MEL triage sensitivity / specificity / NPV, and class recall for MEL / BCC / AKIEC.

## References

- ISIC 2018 Task 3 — https://challenge.isic-archive.com/landing/2018/
- ISIC 2019 — https://challenge.isic-archive.com/landing/2019/
- HAM10000 — Tschandl et al., *Scientific Data* (2018)
- PAD-UFES-20 — Pacheco et al., *Data in Brief* (2020)
- Shades-of-Gray colour constancy — Finlayson & Trezzi (2004)
- DullRazor hair removal — Lee et al. (1997)
- Class-balanced focal loss — Cui et al., *CVPR* (2019)
