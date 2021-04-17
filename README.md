# README

## Choice Class

### Review of Tokoha University's curriculums app built with Ruby on Rails and React.js

このアプリは単純な CRUD アプリです。 **Webpacker** を用いて **Ruby on Rails** と **React.js** で開発しました。

---

## ![Curriculums Home](https://i.gyazo.com/8ac1a5a228a42c352fbd10b5839091b0.png)

## ![Curriculums Show](https://i.gyazo.com/92829b54092296e3eddd5290a267a09e.png)

---

This app uses:

- Ruby version: `2.6.5`
- Rails version: `6.0.3.6`
- Database: `mysql`
- React version: `16.12.0`
- React Hooks API
- React Context API

---

# Apps Overview

このアプリは、私の大学の授業を評価できるアプリです。
主に語学の授業を評価します。誰でも評価でき、他の人のコメントを参照できます。
最初のホーム画面では一目で各授業の 5 段階評価の平均値を見る事ができます。
私の学科では 4 言語以上の言語科目の中から２科目を履修しなければいけません。なので、どの言語にすれば良いのか非常に悩みます。
実際に、私は新一年生と新２年生が履修登録で悩んでいるという声を聞いたので、このアプリを開発しました。
コロナ禍で先輩や先生方との関わりが少なく、直接授業内容を聞く事が難しくなりました。学校側がシラバスに授業内容を提示していますが、実際の授業内容はそれと異なっている事がほとんどです。
そのため、そのギャップで履修登録に失敗しないように、このアプリで実際の授業内容を把握する事ができます。

# How did I create this app?

私はこのアプリを作るにあたって、rails と react を組み合わせました。バックエンド側の言語は rails しか開発経験が無かったからです。gem に"react-rails"を記入し、bundle install でこの組み合わせを実現させました。しかし、実際は他にも特別に注意しなければいけない点がいくつかありました。初めての react-rails-app の開発のため、Google などで調べながら実装を進めました。Node.js などのバックエンド側のフレームワークを学びたいと思いました。Node.js を選ぶかどうかはまだ決めていません。

# What's amazing points about this app?

工夫した点はレビュー機能の星のアニメーションです。ホバーすると色が変わります。また、右画面はレビューフォーム、左画面をレビュー一覧にする事で、レビューを投稿してすぐにレビュー内容を参照する事ができます。

# How should I improve this app?

このアプリはまだ完成ではありません。レビューの削除機能や編集機能、ユーザー管理機能を実装する必要があります。もし間違えて誤った内容で投稿してしまった際に、削除または編集できるようにする必要があります。これからその機能を実装していく予定です。
