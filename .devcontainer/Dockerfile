FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    locales \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# ロケールをja_JP.UTF-8に変更する
RUN sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen \
  && locale-gen \
  && update-locale LANG=ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

# タイムゾーンをJSTに変更する
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# npmを最新に更新
RUN npm install -g npm@latest

USER node
