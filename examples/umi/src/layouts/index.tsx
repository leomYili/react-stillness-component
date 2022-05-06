import { IRouteComponentProps, Router } from 'umi';
import { Link } from 'react-router-dom';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <>
      <div>
        测试
        <Link to={'/home'}>home</Link>
        <div
          onClick={() => {
            history.push('/home/a');
          }}
        >
          Go to home child page a
        </div>
        <div
          onClick={() => {
            history.push('/list');
          }}
        >
          Go to list page
        </div>
        <div
          onClick={() => {
            history.push('/about');
          }}
        >
          Go to about page
        </div>
      </div>
      {children}
    </>
  );
}
