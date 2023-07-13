## Quy trình sử dụng GIT trong dự án

```
git checkout develop
git checkout -b [PT-01]/[feat/fix]/xxxx
git add
git commit
git pull origin --rebase develop
git push origin [PT-01]/[feat/fix]/xxxx
```

## Setup

1. Install the following

- [nvm](https://github.com/nvm-sh/nvm)

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

- [VS Code](https://code.visualstudio.com/)

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Make sure using Node.js version is 14 (14.19.2)

```

$ nvm install 14 && nvm use 14

```

4. Clone this repo

```
- git clone git@gitlab.com:tungtran.fetch/fetch.tech.nextjs.git
- cd fetch.tech.nextjs && npm install && npm run dev

```

5. Tạo file .env với các thông tin sau được lấy từ fie env.example

```
NEXT_PUBLIC_HOST_API=
NEXT_PUBLIC_FACEBOOK_PAGE_ID=
NEXT_PUBLIC_FACEBOOK_APP_ID=
NEXT_PUBLIC_CAPTCHA_SITE_KEY=
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_KEY=
NEXT_PUBLIC_FETCHUNT_GOOGLE_TAG_MANAGER_KEY=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FETCHUNT_FIREBASE_API_KEY=
NEXT_PUBLIC_FETCHUNT_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FETCHUNT_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FETCHUNT_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FETCHUNT_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FETCHUNT_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FETCHUNT_FIREBASE_APP_ID=
```

6. Cài đặt npm và chạy dự án trên production.

```
- pm2 restart id (id của dự án fetch.tech.nextjs được config trong pm2)
- Chú ý: lệnh này đã bao gồm các lệnh nhỏ sau
    + rm -rf node_modules .next
    + npm install
    + npm run production
```

## Quy tắc đặt tên.

[Document](https://github.com/airbnb/javascript)

```
-- Đối với tên các Function sử dụng camelCase
--> example: onRefresh, onBackPress, onSubmit, renderItem

-- Đối với tên các Conponent sử dụng PascalCase
--> example: HomePage, SearchPage, DashBoardPage

-- Đối với tên các Constant sử dụng UPPERCASE
--> example: SECONDS, WIDTH, YEAR

-- Đối với các biến boolean sử dụng tiền tố 'is', 'are', 'has'
--> example: isAction, areEqual, hasEncryption
```

- Quy tắc đặt tên branch.

```
-- Branch name convention: [ProjectName]-[TicketNumber]-[Initial]-[BranchName].
--> example: PT-01-feat/Home
```

- Quy tắc đặt tên commit

```
-- feat: đây là 1 cái commit
-- fix: fix homeScreen sai UI
```

```
Initial types: 'feat', 'fix', 'refactor', 'revert'
```

## Quy trình chuyển task trong dự án

- [Document](https://docs.google.com/document/d/18is2D6OM3i0x7ADr1RZtCIeerSBXLmtzo2XGmx5nDQ8/edit)

- 1 Sprint sẽ trong 2 tuần
- Daily meeting: Hằng ngày trong vòng 10-15p: báo cáo công việc và những vấn đề gặp phải

## Tech Stack

- [React](https://reactjs.org/)

- [NextJs](https://nextjs.org/)

- [Document theme](https://docs-minimals.vercel.app/package) ---> detail function theme using

- [Clickup](https://clickup.com/) ---> manage task
