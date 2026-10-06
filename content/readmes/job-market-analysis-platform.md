## Project Structure

```
job-market-analysis/
├── data/                           # Data Lake Architecture (129.68 GB)
│   ├── raw/                        # Original data sources
│   │   ├── github/                 # GitHub Archive data (123.43 GB)
│   │   ├── kaggle/                 # Job market datasets (2.23 GB)
│   │   ├── stackoverflow/          # Developer surveys (0.88 GB)
│   │   └── bls/                    # BLS employment data (0.002 GB)
│   ├── bronze/                     # Cleaned and standardized data (3.14 GB)
│   ├── silver/                     # Unified datasets (0.004 GB)
│   └── gold/                       # ML-ready data
│
├── src/
│   ├── api/                        # FastAPI Application
│   ├── common/                     # Shared Utilities (logging, paths)
│   ├── etl/                        # ETL Pipeline (bronze → silver → gold, unified postings)
│   ├── ingest/                     # Data Ingestion (GH Archive, StackOverflow, BLS, large-scale GitHub collection)
│   ├── ml/                         # XGBoost salary model, skills trend forecasting, training pipeline
│   ├── spark/                      # Apache Spark ETL pipelines
│   ├── streaming/                  # Apache Kafka streaming demo
│   └── app_streamlit.py            # Main Streamlit dashboard
│
├── dags/                           # Apache Airflow DAGs
├── notebooks/                      # Exploratory Data Analysis
├── reports/                        # Comprehensive analysis report
├── models/                         # Trained XGBoost salary prediction model
└── mlruns/                         # MLflow experiment runs and artifacts
```

## Key Features

### Data Lake Architecture
- **Raw Layer**: 126.54 GB of original data from 4 sources
- **Bronze Layer**: 3.14 GB of cleaned and standardized data
- **Silver Layer**: Unified datasets across sources
- **Gold Layer**: ML-ready feature engineering

### Big Data Tools
- **Apache Spark**: Distributed data processing
- **Delta Lake**: Versioned data storage
- **Apache Airflow**: Workflow orchestration
- **Apache Kafka**: Real-time streaming
- **MLflow**: ML experiment tracking

### Machine Learning
- **XGBoost**: Salary prediction model
- **Feature Engineering**: Automated pipeline
- **Model Serving**: FastAPI endpoints
- **Experiment Tracking**: MLflow integration

### API & Visualization
- **FastAPI**: REST API with 5+ endpoints
- **Streamlit**: Interactive dashboards
- **Real-time Data**: Live GitHub activity
- **Predictive Analytics**: Salary predictions
