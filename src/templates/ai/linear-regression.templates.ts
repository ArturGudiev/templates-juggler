import { Template } from "../../types/template.interface.js";

export default [
  {
    title: "Simple example",
    aliases: ["linreg", "linear-regression"],
    syntaxHighlightLanguage: "python",
    content: `
import pandas as pd
from sklearn.datasets import fetch_california_housing
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split

# 1. Загружаем готовые данные
data = fetch_california_housing(as_frame=True)
df = data.frame

# X — факторы (признаки), y — целевая переменная (цена)
X = df.drop(columns=['MedHouseVal'])
y = df['MedHouseVal']

# 2. Делим данные: 80% на обучение модели, 20% на проверку её работы
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Создаём и обучаем модель линейной регрессии
model = LinearRegression()
model.fit(X_train, y_train)

# 4. Делаем предсказания на тестовых данных и оцениваем точность
predictions = model.predict(X_test)
print('Средняя ошибка (MAE):', mean_absolute_error(y_test, predictions))
print('Точность модели (R2):', r2_score(y_test, predictions))
`,
  },
] as Template[];
