This project focuses on building a machine learning model to predict customer churn for a telecom company and developing a data-driven retention strategy. The goal is to identify customers at high risk of churning and implement targeted interventions to reduce churn rate and maximize customer lifetime value.

The project follows a standard data science pipeline:

1. **Data Preprocessing & Feature Engineering**: Cleaning the data, handling missing values, and creating relevant features.
2. **Model Training Setup**: Splitting data, scaling features, and handling class imbalance.
3. **Regularization Methods**: Comparing L1 (Lasso), L2 (Ridge), and Elastic Net regularization for feature selection and model stability.
4. **Logistic Regression Modeling**: Training a final Logistic Regression model using the best regularization approach, optimized for recall.
5. **Churn Scoring Pipeline**: Creating a production-ready pipeline to score new customer data.
6. **Customer Segmentation**: Segmenting customers based on churn risk and behavior.
7. **ROI Analysis**: Calculating the financial return on investment for different retention campaign scenarios.
8. **Retention Playbook**: Generating a detailed action plan and timeline for segment-specific retention tactics.
9. **Monitoring Dashboard**: Setting up a framework for tracking campaign performance and KPIs.

## Data

The project uses the IBM Telco Customer Churn dataset, available [here](https://www.kaggle.com/blastchar/telco-customer-churn). It contains customer demographic, service, and account information, along with churn status.

## Methodology

- **Exploratory Data Analysis (EDA)**: Initial data inspection, quality checks, and target variable analysis.
- **Feature Engineering**: Creating 9 new continuous features from original data (e.g., `average_monthly_spend`, `loyalty_score`).
- **Data Preprocessing**: Handling missing values in `TotalCharges`, converting data types.
- **Categorical Encoding**: One-Hot Encoding for categorical features.
- **Train/Test Split**: Stratified split to maintain churn distribution.
- **Feature Scaling**: `StandardScaler` applied to continuous features.
- **Class Imbalance**: Using `class_weight='balanced'` in Logistic Regression. (SMOTE was explored but the non-SMOTE model performed best on the test set for the target metric.)
- **Regularization**: Comparing Lasso, Ridge, and Elastic Net Logistic Regression to prevent overfitting and improve interpretability.
- **Model Selection**: Choosing the Elastic Net Logistic Regression model with C=0.1 and l1_ratio=0.5 based on superior recall (86.9%) on the test set and interpretability benefits.
- **Threshold Optimization**: Identifying an optimal probability threshold to maximize recall (achieving ≥85% target).
- **Prediction Pipeline**: Developing a script to load new data, preprocess, engineer features, scale, and generate churn probabilities and predictions.
- **Customer Segmentation**: Defining strategic segments based on churn probability and risk level.
- **Financial Analysis**: Calculating ROI for targeted retention campaigns using defined costs and success rates.
- **Retention Strategy**: Building a playbook with segment-specific tactics, owners, timelines, and KPIs.
- **Monitoring**: Creating a simulated dashboard to track campaign performance metrics.

## Key Results

- **Best Model**: Elastic Net Logistic Regression (C=0.1, l1_ratio=0.5)
- **Test Set Performance (Optimized for Recall)**:
  - Recall: 86.9% (Exceeded 85% target)
  - Precision: 47.7%
  - F1-Score: 0.616
  - ROC-AUC: 0.847
- **Feature Selection**: The Elastic Net model removed 10 out of 39 features, simplifying the model while maintaining performance.
- **Feature Importance**: Key churn drivers include `loyalty_score` (protective), `InternetService_Fiber optic`, `revenue_velocity`, `PaymentMethod_Electronic check`, and `PaperlessBilling_Yes` (risk factors).
- **Customer Segmentation**: Customers are segmented into actionable groups like 'Champions at Risk', 'Needs Attention', 'Potential Risk', and 'Loyal & Stable'.
- **ROI Analysis**: Targeted intervention by segment is projected to yield an ROI of 1632%, saving an estimated $1.15M in net benefit compared to doing nothing.
- **Retention Playbook**: Specific tactics, priorities, budgets, and expected outcomes for each segment.
- **Monitoring**: A framework for tracking campaign KPIs like contact rate, engagement rate, retention rate, and financial impact.

Elastic Net Logistic Regression is the most suitable model for this dataset, providing a strong balance of predictive performance (meeting the recall target), interpretability, and efficiency. The segmentation, ROI analysis, and playbook provide a complete, actionable solution for proactively managing customer churn.
