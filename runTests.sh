cd Server/nest-api
npm install
npm run test:cov
nohup npm run start &
cd ../../Client
npm install
npm run test:cov