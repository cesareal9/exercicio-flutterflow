import e from 'express';

import compras_router from './routes/compras_route.js';

const app = e();

app.use(e.json());

app.use('/compras', compras_router);

app.listen(3000, () => console.log('Servidor rodando na porta ' + 3000));