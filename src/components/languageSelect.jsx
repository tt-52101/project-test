import { useTranslation } from "react-i18next";
import React from "react";
import i18next from "i18next";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";

const useStyles = makeStyles({
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
  but: {
    width: "auto",
    display: "inline-block",
    minWidth: 0,
    padding: 0,
  },
  root: {
    width: "auto",
    display: "inline-block",
  },
});

function LanguageSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [check, setChecked] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function checked(e){

  }
  
 
  console.log(check);
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="right-panel-wrapper is-languages is-active">
        <div className="right-panel">
          <div className="right-panel-head">
            <h3>{t("select_language")}</h3>
            <a className="close-panel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
          <div className="right-panel-body has-slimscroll">
            <div className="languages-boxes">
              {Object.keys(languageMap)?.map((item, index) => (
                <div className="language-box">
                  <div
                    className="language-option" 
                    onClick={(event) => {
                     console.log('ITEM',event.currentTarget)
                     
                     setChecked(!check)
                    
                     
                      document.getElementById('block ' +index).checked=true

                      languageMap[item].active=true
                      //     if(event.currentTarget.id==index)
                      // {

                      // setChecked(!check)}
                      // else{
                      //   setChecked(false)
                      // }
                    }}
                  > 
                    <input
                      type="radio"
                      name="language_selection"
                      id={"block " + index}
               checked={languageMap[item].active? true:false}
              
                    
                    />
                    <div className="language-option-inner">
                      <input
                        type="button"
                        key={item}
                        onClick={() => {
                          i18next.changeLanguage(item);
                          setMenuAnchor(null);
                        }}
                      />{" "}
                      {languageMap[item].label}
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const languageMap = {
    ru: {
      label: (
        <img src="assets/img/icons/flags/united-states-of-america.svg" alt="" />
      ),
      dir: "ltr",
      active: true,
    },
    en: {
      label: <img src="assets/img/icons/flags/canada.svg" alt="" />,
      dir: "ltr",
      active: check,
    },
    au: {
      label: <img src="assets/img/icons/flags/australia.svg" alt="" />,
      dir: "ltr",
      active: check,
    },
    ut: {
      label: <img src="assets/img/icons/flags/australia.svg" alt="" />,
      dir: "ltr",
      active: check,
    },
    ur: {
      label: <img src="assets/img/icons/flags/australia.svg" alt="" />,
      dir: "ltr",
      active: check,
    },
  };

  const selected = localStorage.getItem("i18nextLng") || "ru";
  const { t } = useTranslation();
 
  console.log('selected',languageMap[selected].active)
 
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);
  return (
    <>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className={clsx(classes.but)}
              onClick={toggleDrawer(anchor, true)}
            >
              {languageMap[selected].label}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

     
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {/* <ListSubheader>{t("select_language")}</ListSubheader> */}
        {/*        
             {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem> 
            ))} */}
      </Popover>
    </>
  );
}

export default LanguageSelect;
