## Using Jitsi Meet

## Start Jitsi

1. `npm i`
2. `npm start`

## Docker compose

1. `make build-web`
2. `cd docker-jitsi-meet/web`
3. `docker build . -t jitsi/web:talk`
4. `cd ..`
5. `docker-compose up`