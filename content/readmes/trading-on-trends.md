An Advanced Stock Sentiment Analysis system.

## APIs

- **Reddit API**: Social media sentiment data collection using the PRAW library — subreddit search, post collection, sentiment scoring.
- **Yahoo Finance API**: Historical stock market data retrieval using yfinance — OHLCV data, technical indicators, price history.
- **Flask API**: Web application endpoints for analysis requests — real-time analysis and visualization generation.

## Data cleaning and transformation

- **Text preprocessing**: URL removal, special character handling, whitespace normalization.
- **Data merging**: Stock and sentiment data fusion with date alignment.
- **Missing value handling**: NaN and infinity value replacement with appropriate defaults; forward/backward fill for price data, zero-fill for sentiment data.
- **Feature engineering**: Technical indicators (RSI, MACD, Bollinger Bands); lag features, rolling statistics, interaction features.

## Models

### Classification — stock price direction (up/down)
- Standard Logistic Regression with L2 regularization
- Random Forest Classifier
- XGBoost Classifier
- Metrics: Accuracy, Precision, Recall, F1-score, AUC-ROC, confusion matrix

### Regression — stock returns percentage
- Ridge Regression (L2 regularization)
- Gradient Boosting Regressor
- XGBoost Regressor
- Metrics: RMSE, MAE, R², Directional Accuracy

## Engineering

- **Object-oriented design**: A main `StockSentimentAnalyzer` class with methods organized by data collection, processing, analysis, and visualization.
- **Regular expressions** for text cleaning: URL removal, username extraction, hashtag normalization, special-character filtering.

## Features and enhancements

### Interactive Web Application
- **Flask-based API**: Real-time analysis endpoint
- **Dynamic visualizations**: Plotly charts with interactive elements
- **Multi-panel dashboard**: Price charts, volume, technical indicators

### Advanced Sentiment Analysis
- **Financial lexicon enhancement**: Custom financial terms for VADER
- **Multi-source aggregation**: Combined sentiment from multiple subreddits
- **Temporal features**: Sentiment momentum, rolling averages

### Comprehensive Technical Analysis
- Simple/Exponential Moving Averages (SMA/EMA)
- Relative Strength Index (RSI)
- MACD (Moving Average Convergence Divergence)
- Bollinger Bands
- Average True Range (ATR)
- Stochastic Oscillator

### Enhanced Model Training Pipeline
- **Feature selection**: Random Forest-based importance ranking
- **Cross-validation**: Time series split for temporal data
- **Class balancing**: SMOTE for handling imbalanced datasets
- **Model selection**: Automated comparison of multiple algorithms

### Robust Error Handling and Data Validation
- **NaN/infinity handling**: Comprehensive cleaning before analysis
- **API error management**: Graceful fallbacks for data collection
- **Visualization safety**: Validated inputs for plotting functions

### Performance Monitoring
- **Model metrics tracking**: JSON storage of evaluation results
- **Feature importance analysis**: Visual comparison across models
- **Backtesting framework**: Historical performance validation

## Project Structure

```
stock_sentiment_analysis/
├── data/
│   ├── raw/                     # Original API data
│   ├── processed/               # Cleaned and merged data
│   └── final/                   # Analysis-ready datasets
├── models/                      # Trained model artifacts
├── visualizations/              # Generated charts and plots
├── app.py                       # Flask web application
├── StockSentimentAnalyzer.py    # Main analysis class
└── requirements.txt             # Project dependencies
```
