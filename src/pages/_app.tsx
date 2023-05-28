import { type AppType } from 'next/app';
import { Mulish } from 'next/font/google';
import { api } from '~/utils/api';
import '~/styles/globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish'
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${mulish.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
