import { useEffect } from 'react';
import Link from './link';

function Header() {

  useEffect(() => {
    document.title = window.Config.SiteTitle;
  }, []);

  return (
    <div id='header'>
      <div className='container'>
        <h1 className='logo'>{window.Config.SiteTitle}</h1>
        <h3>{window.Config.SiteSubTitle}</h3>
        <div className='navi'>
          {window.Config.Navi.map((item, index) => (
            <Link key={index} to={item.url} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
