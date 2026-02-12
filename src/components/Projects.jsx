import { useState, useEffect } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ios');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Re-observe reveals when tab changes
  useEffect(() => {
    const segment = document.getElementById('tab-' + activeTab);
    if (!segment) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    segment.querySelectorAll('.reveal').forEach((el) => {
      el.classList.remove('in');
      setTimeout(() => obs.observe(el), 50);
    });
    return () => obs.disconnect();
  }, [activeTab]);

  return (
    <section className="section" id="work">
      <div className="section-inner">
        <p className="section-eyebrow reveal">Selected Work</p>
        <h2 className="section-heading reveal d1">
          Built to ship.<br />
          <span className="section-heading-muted">Built to scale.</span>
        </h2>
        <p className="section-desc reveal d2">From concept to production &mdash; organized by domain.</p>

        <div className="project-tabs reveal d2">
          <button
            className={`project-tab${activeTab === 'ios' ? ' active' : ''}`}
            onClick={() => handleTabClick('ios')}
          >
            <span className="project-tab-icon">📱</span> iOS Development
          </button>
          <button
            className={`project-tab${activeTab === 'ml' ? ' active' : ''}`}
            onClick={() => handleTabClick('ml')}
          >
            <span className="project-tab-icon">📊</span> Data Science &amp; ML
          </button>
        </div>

        {/* iOS Segment */}
        <div className={`project-segment${activeTab === 'ios' ? ' active' : ''}`} id="tab-ios">
          <div className="project-tile reveal d2">
            <div className="project-visual">
              <div className="project-visual-bg pv-ios-1"></div>
              <div className="device device-iphone">
                <div className="device-notch"></div>
                <div className="device-line accent w60"></div>
                <div className="device-line w40"></div>
                <div className="device-line"></div>
                <div className="device-block">
                  <div className="device-chart">
                    <div style={{ height: '30%' }}></div>
                    <div style={{ height: '55%' }}></div>
                    <div style={{ height: '45%' }}></div>
                    <div style={{ height: '80%' }}></div>
                    <div style={{ height: '60%' }}></div>
                    <div style={{ height: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tag">iOS + CoreML &bull; Featured</div>
              <h3 className="project-title">HealthPulse &mdash; AI Health Companion</h3>
              <p className="project-desc">
                Comprehensive health tracker with on-device ML for biometric anomaly detection.
                Real-time heart rate analysis, sleep patterns, and personalized insights &mdash;
                all processed locally for privacy.
              </p>
              <div className="project-stack">
                <span>SwiftUI</span><span>CoreML</span><span>HealthKit</span><span>TF Lite</span><span>Create ML</span>
              </div>
              <div className="project-metrics">
                <div><div className="pm-value">500K+</div><div className="pm-label">Active Users</div></div>
                <div><div className="pm-value">4.8&#9733;</div><div className="pm-label">App Store</div></div>
                <div><div className="pm-value">94%</div><div className="pm-label">Precision</div></div>
              </div>
            </div>
          </div>

          <div className="project-tile reveal d3">
            <div className="project-visual">
              <div className="project-visual-bg pv-ios-2"></div>
              <div className="device device-iphone">
                <div className="device-notch"></div>
                <div className="device-line accent w60"></div>
                <div className="device-line"></div>
                <div className="device-line w40"></div>
                <div className="device-line"></div>
                <div className="device-block" style={{ background: 'rgba(48,209,88,0.06)' }}>
                  <div className="device-chart">
                    <div style={{ height: '50%', background: '#30d158' }}></div>
                    <div style={{ height: '70%', background: '#30d158' }}></div>
                    <div style={{ height: '40%', background: '#30d158' }}></div>
                    <div style={{ height: '85%', background: '#30d158' }}></div>
                    <div style={{ height: '55%', background: '#30d158' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tag">iOS Development</div>
              <h3 className="project-title">FlowState &mdash; Productivity Reimagined</h3>
              <p className="project-desc">
                Offline-first task management built with SwiftUI. Adaptive Pomodoro timers, ML-driven
                task prioritization, and seamless CloudKit sync with complex conflict resolution.
              </p>
              <div className="project-stack">
                <span>Swift</span><span>SwiftUI</span><span>CoreData</span><span>CloudKit</span><span>Widgets</span>
              </div>
              <div className="project-metrics">
                <div><div className="pm-value">200K+</div><div className="pm-label">Downloads</div></div>
                <div><div className="pm-value">4.7&#9733;</div><div className="pm-label">App Store</div></div>
                <div><div className="pm-value">32%</div><div className="pm-label">Productivity &uarr;</div></div>
              </div>
            </div>
          </div>

          <div className="project-small reveal d3">
            <div className="project-tag">SwiftUI &bull; Featured</div>
            <h3 className="project-title" style={{ fontSize: '1.25rem' }}>NewsWave &mdash; News Aggregation</h3>
            <p className="project-desc">
              Multi-category news app with trending and keyword search, bookmarks, sharing, and
              custom animated tab bar. Integrated Firebase for auth and Firestore for real-time data.
            </p>
            <div className="project-stack">
              <span>SwiftUI</span><span>Combine</span><span>Codable</span><span>Kingfisher</span><span>Firebase</span><span>Firestore</span>
            </div>
            <div className="project-metrics" style={{ marginTop: '12px' }}>
              <div><div className="pm-value">6</div><div className="pm-label">Categories</div></div>
              <div><div className="pm-value">🔥</div><div className="pm-label">Trending</div></div>
            </div>
          </div>

          <div className="project-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div className="project-small reveal d4">
              <div className="project-tag">Swift</div>
              <h3 className="project-title" style={{ fontSize: '1.25rem' }}>WhimAI</h3>
              <p className="project-desc">
                AI-powered iOS app exploring creative possibilities with intelligent features and
                polished native UI.
              </p>
              <div className="project-stack"><span>Swift</span><span>UIKit</span><span>CoreML</span></div>
            </div>
            <div className="project-small reveal d5">
              <div className="project-tag">Swift</div>
              <h3 className="project-title" style={{ fontSize: '1.25rem' }}>PhotoTales</h3>
              <p className="project-desc">
                Photography and storytelling app with beautiful image presentation and narrative
                features.
              </p>
              <div className="project-stack"><span>Swift</span><span>AVFoundation</span><span>UIKit</span></div>
            </div>
            <div className="project-small reveal d5">
              <div className="project-tag">Swift &bull; Utility</div>
              <h3 className="project-title" style={{ fontSize: '1.25rem' }}>Calculator</h3>
              <p className="project-desc">
                Clean, functional calculator app with elegant UI design and smooth interactions built
                in pure Swift.
              </p>
              <div className="project-stack"><span>Swift</span><span>UIKit</span><span>AutoLayout</span></div>
            </div>
          </div>
        </div>

        {/* ML Segment */}
        <div className={`project-segment${activeTab === 'ml' ? ' active' : ''}`} id="tab-ml">
          <div className="project-tile reveal d2">
            <div className="project-info">
              <div className="project-tag">Big Data Analytics &bull; End-to-End Platform</div>
              <h3 className="project-title">Job Market Analysis Platform</h3>
              <p className="project-desc">
                Enterprise-grade Big Data analytics platform analyzing tech job market trends, salary
                predictions, and skill demand forecasting. Processed 129.68 GB across 4 data sources
                using distributed computing with a 3-layer Data Lake architecture (Raw → Bronze → Silver → Gold)
                and 2.7M+ records.
              </p>
              <div className="project-stack">
                <span>Apache Spark</span><span>Delta Lake</span><span>Airflow</span><span>Kafka</span>
                <span>MLflow</span><span>XGBoost</span><span>FastAPI</span><span>Streamlit</span><span>Docker</span>
              </div>
              <div className="project-metrics">
                <div><div className="pm-value">129 GB</div><div className="pm-label">Data Processed</div></div>
                <div><div className="pm-value">2.7M+</div><div className="pm-label">Records</div></div>
                <div><div className="pm-value">&lt;100ms</div><div className="pm-label">API Response</div></div>
              </div>
            </div>
            <div className="project-visual">
              <div className="project-visual-bg pv-ml-5"></div>
              <div className="device device-dashboard">
                <div className="device-line accent w60"></div>
                <div className="device-line w40"></div>
                <div className="dash-row"><div className="dash-card"></div><div className="dash-card"></div><div className="dash-card"></div></div>
                <div className="dash-row"><div className="dash-card"></div><div className="dash-card"></div></div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                  <div className="device-chart" style={{ width: '100%', height: '60px' }}>
                    <div style={{ height: '35%', background: '#2997ff' }}></div>
                    <div style={{ height: '55%', background: '#2997ff' }}></div>
                    <div style={{ height: '70%', background: '#2997ff' }}></div>
                    <div style={{ height: '85%', background: '#2997ff' }}></div>
                    <div style={{ height: '65%', background: '#2997ff' }}></div>
                    <div style={{ height: '92%', background: '#30d158' }}></div>
                    <div style={{ height: '78%', background: '#2997ff' }}></div>
                    <div style={{ height: '88%', background: '#2997ff' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-tile reveal d3">
            <div className="project-visual">
              <div className="project-visual-bg pv-ml-4"></div>
              <div className="device device-dashboard">
                <div className="device-line accent w60"></div>
                <div className="dash-row"><div className="dash-card"></div><div className="dash-card"></div><div className="dash-card"></div></div>
                <div className="device-line w40" style={{ marginTop: '6px' }}></div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                  <div className="device-chart" style={{ width: '100%', height: '55px' }}>
                    <div style={{ height: '25%', background: '#ff375f' }}></div>
                    <div style={{ height: '40%', background: '#ff375f' }}></div>
                    <div style={{ height: '15%', background: '#ff375f' }}></div>
                    <div style={{ height: '90%', background: '#ff375f' }}></div>
                    <div style={{ height: '35%', background: '#ff375f' }}></div>
                    <div style={{ height: '60%', background: '#ff375f' }}></div>
                    <div style={{ height: '20%', background: '#ff375f' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tag">Anomaly Detection &bull; ML Pipeline</div>
              <h3 className="project-title">Expense Fraud Detection System</h3>
              <p className="project-desc">
                End-to-end enterprise fraud detection system with a complete data pipeline from ETL to
                interactive dashboard. Designed a normalized 7-table database schema, engineered 35
                features across 7 categories, and deployed an Isolation Forest model processing 1,597
                expense claims across 467 employees and 15 departments.
              </p>
              <div className="project-stack">
                <span>Python</span><span>SQL Server</span><span>Scikit-Learn</span><span>SQLAlchemy</span>
                <span>Streamlit</span><span>Plotly</span><span>Docker</span>
              </div>
              <div className="project-metrics">
                <div><div className="pm-value">159</div><div className="pm-label">Anomalies Found</div></div>
                <div><div className="pm-value">37</div><div className="pm-label">High-Risk Claims</div></div>
                <div><div className="pm-value">227%</div><div className="pm-label">Detection Lift</div></div>
              </div>
            </div>
          </div>

          <div className="project-tile reveal d3">
            <div className="project-info">
              <div className="project-tag">Classification &bull; DATA 602 — Advanced ML</div>
              <h3 className="project-title">Customer Churn Prediction System</h3>
              <p className="project-desc">
                Comprehensive ML solution for telecom customer retention &mdash; engineered 40+ features
                and benchmarked 7+ algorithms (Logistic Regression, Random Forest, XGBoost, Gradient
                Boosting, SVM, KNN, Neural Networks) with GridSearchCV hyperparameter tuning and
                SHAP-based model interpretation for actionable business insights.
              </p>
              <div className="project-stack">
                <span>Python</span><span>Scikit-Learn</span><span>XGBoost</span><span>Pandas</span>
                <span>SHAP</span><span>Matplotlib</span><span>Seaborn</span>
              </div>
              <div className="project-metrics">
                <div><div className="pm-value">7+</div><div className="pm-label">Models Compared</div></div>
                <div><div className="pm-value">40+</div><div className="pm-label">Features Built</div></div>
                <div><div className="pm-value">SHAP</div><div className="pm-label">Explainability</div></div>
              </div>
            </div>
            <div className="project-visual">
              <div className="project-visual-bg pv-ml-3"></div>
              <div className="device device-dashboard">
                <div className="device-line accent w60"></div>
                <div className="device-line w40"></div>
                <div className="dash-row"><div className="dash-card"></div><div className="dash-card"></div></div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                  <div className="device-chart" style={{ width: '100%', height: '55px' }}>
                    <div style={{ height: '80%', background: '#30d158' }}></div>
                    <div style={{ height: '60%', background: '#30d158' }}></div>
                    <div style={{ height: '90%', background: '#30d158' }}></div>
                    <div style={{ height: '45%', background: '#ff9f0a' }}></div>
                    <div style={{ height: '75%', background: '#30d158' }}></div>
                    <div style={{ height: '55%', background: '#ff9f0a' }}></div>
                    <div style={{ height: '85%', background: '#30d158' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="project-small reveal d4">
              <div className="project-tag">Machine Learning &bull; Academic</div>
              <h3 className="project-title" style={{ fontSize: '1.25rem' }}>Graduate Admissions Predictor</h3>
              <p className="project-desc">
                Predictive ML model analyzing academic profiles, research experience, and test scores
                to forecast graduate admissions probability with high accuracy.
              </p>
              <div className="project-stack">
                <span>Python</span><span>Scikit-Learn</span><span>Pandas</span><span>NumPy</span><span>Jupyter</span>
              </div>
            </div>
            <div className="project-small reveal d5">
              <div className="project-tag">Data Science &bull; Financial Analytics</div>
              <h3 className="project-title" style={{ fontSize: '1.25rem' }}>Trading on Trends</h3>
              <p className="project-desc">
                Quantitative trading signal analysis using statistical modeling and ML pattern
                recognition to identify profitable market trends from historical data.
              </p>
              <div className="project-stack">
                <span>Python</span><span>Pandas</span><span>TensorFlow</span><span>Matplotlib</span><span>NumPy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
