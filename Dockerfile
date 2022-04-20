FROM cubetiq/calpine-node AS builder
LABEL maintainer="sombochea@cubetiqs.com"

WORKDIR /app

COPY package.json yarn.lock ./

COPY . .

RUN yarn config set registry https://r.ctdn.net/
RUN npx yarn && npx yarn build

FROM cubetiq/calpine-node:latest
LABEL maintainer="sombochea@cubetiqs.com"

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN apk update && \
    apk add tzdata && \
    cp /usr/share/zoneinfo/Asia/Phnom_Penh /etc/localtime && \
    echo "Asia/Phnom_Penh" > /etc/timezone && \
    apk del tzdata

EXPOSE 3000

CMD [ "npx", "yarn", "start" ]