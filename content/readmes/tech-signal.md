**Startup & developer news in one place.**
Aggregated feed from Hacker News, Reddit, GitHub, and AI & ML sources — with bookmarks, explore, and built-in safety controls.

## What is it?

A native iOS app that brings together the best of tech and AI news:

- **Unified feed** — One timeline with filter pills: **All**, **HN**, **Reddit**, **GitHub**, **AI & ML**
- **Hacker News** — Top, New, Ask HN, Show HN with comments
- **Reddit** — Hot posts from tech subreddits (and AI communities in the AI tab)
- **GitHub** — Trending repositories with language filter
- **AI & ML** — Google News RSS (AI, ML, LLM queries), direct RSS feeds (OpenAI, Google AI, Hugging Face, MIT, IEEE, ZDNet, The Decoder), plus Reddit r/artificial, r/machinelearning, r/LocalLLaMA
- **Bookmarks** — Save posts from any source; search and sort (latest, oldest, top score)
- **Explore** — Curated entry points: HN categories, Reddit tech, GitHub trending, AI & ML feed
- **Safety tools** — Report and hide individual posts, mute authors, and filter sensitive Reddit content
- **Settings** — Default feed filter, appearance (light/dark/system), subreddit picker, safety controls, clear cache

All with **no third‑party SDKs**: URLSession, SwiftData, and system frameworks only.

## Features in detail

| Area | What it does |
|------|--------------|
| **Feed** | Single scrollable list; filter by source (All / HN / Reddit / GitHub / AI & ML); sort by Newest, Top Score, Most Discussed; pull to refresh; card layout with source badge, score, comments, bookmark, open in Safari |
| **AI & ML** | Combines Google News RSS (4 query sets), 7 direct RSS feeds, and 3 Reddit AI subreddits; merged and sorted by date; 15‑min cache; rich article body in detail (HTML/images/video) |
| **HN** | Top / New / Ask / Show; story detail with optional comments; no API key |
| **Reddit** | Hot posts; optional OAuth for higher limits; subreddit picker in settings; comments in detail |
| **GitHub** | Trending repos; language filter; README preview in detail |
| **Bookmarks** | SwiftData-backed; search by title/author; sort; open, share, delete from list or context menu |
| **Explore** | Browsable sections and “Curated paths” linking into HN, Reddit, GitHub, AI feed |
| **Safety** | Local moderation controls: report & hide a post, mute authors, and hide Reddit posts flagged NSFW/spoiler |

## Tech stack

| Layer | Choice |
|-------|--------|
| **Platform** | iOS 17.0+ |
| **Language** | Swift 5.9+ |
| **UI** | SwiftUI only |
| **Architecture** | MVVM (Views, ViewModels, Models, Services) |
| **Data** | SwiftData (bookmarks, preferences); `CacheManager` (memory + disk) for API/RSS |
| **Networking** | `URLSession` + async/await; no Alamofire/Moya |
| **Dependencies** | None (no SPM/CocoaPods for the main app) |

## Data sources and cost

| Source | Auth | Cost |
|--------|------|------|
| Hacker News | None | Free |
| Google News RSS (AI/ML) | None | Free |
| Direct AI RSS feeds | None | Free |
| Reddit (public) | None | Free |
| Reddit (OAuth) | Client ID + secret | Free |
| GitHub (unauthenticated) | None | Free (lower rate limit) |
| GitHub (token) | PAT | Free (higher limit) |

No paid APIs or keys are required to run the app.

## Caching

- **Feed (HN + Reddit + GitHub):** 10 minutes (memory + disk).
- **RSS / AI feed:** 15 minutes.
- **Detail pages:** 30 minutes; **GitHub:** 60 minutes.
- Cache can be cleared from **Settings → Clear API Cache**.

## Testing

- **Unit tests** cover deployment-critical preference and moderation behavior.
- **Fixtures** with mock JSON are available for expanding network/service coverage.
