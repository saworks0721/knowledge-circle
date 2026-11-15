# Knowledge Circle

元同僚や専門家仲間など、組織の外のつながりで経験や知恵を共有する招待制の Web アプリ。

## 開発

```
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ に出力
```

## 構成

- フロントエンド：React + Vite（リポジトリ直下）
- 公開先：Azure Static Web Apps（app_location: `/`、output_location: `dist`）
- API：Azure Functions（`api/` に追加予定）
