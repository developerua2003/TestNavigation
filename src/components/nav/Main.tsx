import * as React from "react";
import '../../styles/main.scss';

interface IMainProps {
  children: any;
  isSloped?: boolean;
  onMenuTrigger: () => void;
}

const main: React.FC<IMainProps> = (props) => {
    const currentHref = window.location.pathname.split("/").pop();
    let title = '';

    switch (currentHref) {
        case 'start':
            title = 'Start';
            break;
        case 'yourCart':
            title = 'Your Cart';
            break;
        case 'favourites':
            title = 'Favourites';
            break;
        case 'yourOrders':
            title = 'Your Orders';
            break;
        default:
            title = 'Start';
    }


    console.log();

  return (
    <div className={`main ${props.isSloped ? 'sloped' : ''}`}>
        <div className="main_header">
          <div className="main_header_titleBlock">
              <div onClick={props.onMenuTrigger} className="main_header_titleBlock_lines">
                <div className="main_header_titleBlock_lines_line" />
                <div className="main_header_titleBlock_lines_line" />
                <div className="main_header_titleBlock_lines_line" />
              </div>
              <span className="main_header_titleBlock_title">
                {title}
              </span>
          </div>
        </div>
      <div className="main_mainBlock">
        {props.children}
      </div>
    </div>
  );
};

export default main;