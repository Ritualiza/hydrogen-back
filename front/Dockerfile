FROM node:16 AS build-env
ADD . /app-frontend

WORKDIR /app-frontend
RUN yarn
RUN yarn build --target node

FROM gcr.io/distroless/nodejs:16 AS run-env
ENV NODE_ENV production
COPY --from=build-env /app-frontend /app-frontend

EXPOSE ${PORT:-8080}

WORKDIR /app-frontend
CMD ["dist/node/index.js"]
