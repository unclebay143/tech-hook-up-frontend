import React from "react";

const Solution = ({ menuConfig }) => {
  const [openSubNav, setopenSubNav] = React.useState(null);
  return (
    <div className='menu-wrapper'>
      {menuConfig.map(({ title, subItems }, index) => {
        return (
          <React.Fragment>
            <div
              data-test-id={`first-level-${title.toLowerCase()}}`} // i.e first-level-home
              key={`first-level-${title.toLowerCase()}-${index}`} // i.e first-level-home-1
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3>{title}</h3>

              {/* The button should only be displayed when there are subItems */}
              {subItems &&
                (openSubNav === title ? ( // if the subnav is open for this title
                  <button
                    data-test-id={`button-${title.toLowerCase()}`}
                    style={{
                      marginLeft: "20px",
                    }}
                    onClick={() => setopenSubNav(null)} // close the subnav
                  >
                    Hide
                  </button>
                ) : (
                  <button
                    data-test-id={`button-${title.toLowerCase()}`}
                    style={{
                      marginLeft: "20px",
                    }}
                    onClick={() => setopenSubNav(title)} // open the subnav for this title
                  >
                    Expand
                  </button>
                ))}
            </div>

            <div>
              {/* The subItems should only be displayed when there are subItems */}
              {subItems &&
                title === openSubNav && ( // and if the subnav is open for this title
                  <ul data-test-id={`ul-${title.toLowerCase()}`}>
                    {subItems.map((subItem, index) => {
                      return (
                        <li
                          data-test-id={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`} // i.e li-home-subItem
                          key={`li-${title}-${subItem}-${index}`} // i.e li-home-subItem-1
                        >
                          {subItem}
                        </li>
                      );
                    })}
                  </ul>
                )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Solution;
