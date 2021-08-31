import React from 'react';

const Grid = ({ config, data }) => {
  console.log(config);
  return(
  <table>
    <thead>
    <tr>{config.map((configItem)=><th>{configItem.title}</th>)}</tr>
    </thead>
    <tbody>
    {data.map((dataItem)=>(
        <tr>
          {config.map((configItem)=>{
            const key=configItem.field
            if(configItem.component){
           return <configItem.component data={dataItem[key]}/>
            }
            return <td>{dataItem[key]}</td>
            })}  
      </tr>
    ))}    
    </tbody>
  </table>
  );
  
};

export default Grid;