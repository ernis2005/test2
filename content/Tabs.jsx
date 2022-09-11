import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import s from "../styles/Home.module.css";
function Tabss({ data }) {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="capital" {...a11yProps(0)} />
            <Tab label="population" {...a11yProps(1)} />
            <Tab label="region" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="">
            {data.map((res) => {
              return (<><p className={s.capital}>{res.capital}</p> <hr /></>);
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {data.map((res) => {
            return(<> <p className={s.capital}>{res.population}</p> <hr /></>);
          })}
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div className={s.Tabs_Bloc}>
            {data.map((res) => {
            return(<><p className={s.capital}>{res.region}</p> <hr /></>) ;
          })}
            </div>
         
        </TabPanel>
      </Box>
    </div>
  );
}

export default Tabss;
