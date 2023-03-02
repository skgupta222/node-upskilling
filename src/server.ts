import App from '@/app';
import validateEnv from '@utils/validateEnv';
import UsersRoute from '@routes/users.route';

validateEnv();

const app = new App([new UsersRoute()]);

app.listen();