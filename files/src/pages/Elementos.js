import React from 'react';
import ReactDOM from 'react-dom';

import './main.css'

export default class Elementos extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <h1 className="title">Lista de Elementos</h1>

      <div className="holder">
        <div className="number_column">
          <p className="number">Grupo<br />Período</p>
          <p className="number"><br />1</p>
          <p className="number"><br />2</p>
          <p className="number"><br />3</p>
          <p className="number"><br />4</p>
          <p className="number"><br />5</p>
          <p className="number"><br />6</p>
          <p className="number"><br />7</p>
        </div>
        <div className="header_text">
          <p className="number_text">1<span className="hidden">_______</span> 2<span className="hidden">________</span> 3<span className="hidden">______</span> 4<span className="hidden">_______</span> 5<span className="hidden">_______</span> 6<span className="hidden">______</span> 7<span className="hidden">______</span> 8<span className="hidden">______</span> 9<span className="hidden">______</span> 10<span className="hidden">______</span> 11<span className="hidden">______</span> 12<span className="hidden">______</span> 13<span className="hidden">______</span> 14<span className="hidden">______</span> 15<span className="hidden">______</span> 16<span className="hidden">______</span> 17<span className="hidden">______</span> 18</p>
        </div>
        <div className="blue_column1">
          <p className="blue">1<br /><span>H</span><br />1.008<br /></p>
          <p className="blue">3<br /><span>Li</span><br />6.94<br /></p>
          <p className="blue">11<br /><span>Na</span><br />22.990<br /></p>
          <p className="blue">19<br /><span>K</span><br />39.098<br /></p>
          <p className="blue">37<br /><span>Rb</span><br />85.468<br /></p>
          <p className="blue">55<br /><span>Cs</span><br />132.91<br /></p>
          <p className="blue">87<br /><span>Fr</span><br />[223.02]<br /></p>
          <p className="text">*Lanthanoids<span className="hidden">____</span>*<br /><br /><br /><br />**Actinoids<span className="hidden">____</span>**</p>
        </div>
        <div className="blue_column2">
          <p className="white">4<br /><span>rr</span><br />9.02334<br /><br /></p>
          <p className="blue">4<br /><span>Be</span><br />9.0122<br /></p>
          <p className="blue">12<br /><span>Mg</span><br />24.305<br /></p>
          <p className="blue">20<br /><span>Ca</span><br />40.078<br /></p>
          <p className="blue">38<br /><span>Sr</span><br />87.62<br /></p>
          <p className="blue">56<br /><span>Ba</span><br />137.33<br /></p>
          <p className="blue">88<br /><span>Ra</span><br />[226.03]<br /></p>
        </div>
        <div className="pink_column1">
          <p className="pink">21<br /><span>Sc</span><br />44.956<br /></p>
          <p className="pink">39<br /><span>Y</span><br />88.906<br /></p>
          <p className="pink">71<br /><span>Lu</span><br />174.97<br /></p>
          <p className="pink">103<br /><span>Lr</span><br />[262.11]<br /></p>
          <p className="green">57<br /><span>La</span><br />138.91<br /></p>
          <p className="green">89<br /><span>Ac</span><br />[227.03]<br /></p>
        </div>
        <div className="pink_column2">
          <p className="pink">22<br /><span>Ti</span><br />47.867<br /></p>
          <p className="pink">40<br /><span>Zr</span><br />91.224<br /></p>
          <p className="pink">72<br /><span>Hf</span><br />178.49<br /></p>
          <p className="pink">104<br /><span>Rf</span><br />[265.12]<br /></p>
          <p className="green">58<br /><span>Ce</span><br />140.12<br /></p>
          <p className="green">90<br /><span>Th</span><br />232.04<br /></p>
        </div>
        <div className="pink_column3">
          <p className="pink">23<br /><span>V</span><br />50.942<br /></p>
          <p className="pink">41<br /><span>Nb</span><br />92.906<br /></p>
          <p className="pink">73<br /><span>Ta</span><br />180.95<br /></p>
          <p className="pink">105<br /><span>Db</span><br />[268.13]<br /></p>
          <p className="green">59<br /><span>Pr</span><br />140.91<br /></p>
          <p className="green">91<br /><span>Pa</span><br />231.04<br /></p>
        </div>
        <div className="pink_column4">
          <p className="pink">24<br /><span>Cr</span><br />51.996<br /></p>
          <p className="pink">42<br /><span>Mo</span><br />95.96<br /></p>
          <p className="pink">74<br /><span>W</span><br />183.84<br /></p>
          <p className="pink">106<br /><span>Sg</span><br />[271.13]<br /></p>
          <p className="green">60<br /><span>Nd</span><br />144.24<br /></p>
          <p className="green">92<br /><span>U</span><br />238.03<br /></p>
        </div>
        <div className="pink_column5">
          <p className="pink">25<br /><span>Mn</span><br />54.938<br /></p>
          <p className="pink">43<br /><span>Tc</span><br />[97.91]<br /></p>
          <p className="pink">75<br /><span>Re</span><br />186.21<br /></p>
          <p className="pink">107<br /><span>Bh</span><br />[270]<br /></p>
          <p className="green">61<br /><span>Pm</span><br />[144.91]<br /></p>
          <p className="green">93<br /><span>Np</span><br />[237.05]<br /></p>
        </div>
        <div className="pink_column6">
          <p className="pink">26<br /><span>Fe</span><br />55.845<br /></p>
          <p className="pink">44<br /><span>Ru</span><br />101.07<br /></p>
          <p className="pink">76<br /><span>Os</span><br />190.23<br /></p>
          <p className="pink">108<br /><span>Hs</span><br />[277.15]<br /></p>
          <p className="green">62<br /><span>Sm</span><br />150.36<br /></p>
          <p className="green">94<br /><span>Pu</span><br />[244.06]<br /></p>
        </div>
        <div className="pink_column7">
          <p className="pink">27<br /><span>Co</span><br />58.933<br /></p>
          <p className="pink">45<br /><span>Rh</span><br />102.91<br /></p>
          <p className="pink">77<br /><span>Ir</span><br />192.22<br /></p>
          <p className="pink">109<br /><span>Mt</span><br />[276.15]<br /></p>
          <p className="green">63<br /><span>Eu</span><br />151.96<br /></p>
          <p className="green">95<br /><span>Am</span><br />[243.06]<br /></p>
        </div>
        <div className="pink_column8">
          <p className="pink">28<br /><span>Ni</span><br />58.693<br /></p>
          <p className="pink">46<br /><span>Pd</span><br />106.42<br /></p>
          <p className="pink">78<br /><span>Pt</span><br />195.08<br /></p>
          <p className="pink">110<br /><span>Ds</span><br />[281.16]<br /></p>
          <p className="green">64<br /><span>Gd</span><br />157.25<br /></p>
          <p className="green">96<br /><span>Cm</span><br />[247.07]<br /></p>
        </div>
        <div className="pink_column9">
          <p className="pink">29<br /><span>Cu</span><br />63.546<br /></p>
          <p className="pink">47<br /><span>Ag</span><br />107.87<br /></p>
          <p className="pink">79<br /><span>Au</span><br />196.97<br /></p>
          <p className="pink">111<br /><span>Rg</span><br />[280.16]<br /></p>
          <p className="green">65<br /><span>Tb</span><br />158.93<br /></p>
          <p className="green">97<br /><span>Bk</span><br />[247.07]<br /></p>
        </div>
        <div className="pink_column10">
          <p className="pink">30<br /><span>Zn</span><br />65.38<br /></p>
          <p className="pink">48<br /><span>Cd</span><br />112.41<br /></p>
          <p className="pink">80<br /><span>Hg</span><br />22.59<br /></p>
          <p className="pink">112<br /><span>Cn</span><br />[285.17]<br /></p>
          <p className="green">66<br /><span>Dy</span><br />162.50<br /></p>
          <p className="green">98<br /><span>Cf</span><br />[251.08]<br /></p>
        </div>
        <div className="yellow_column1" style={{paddingLeft: 0}}>
          <p className="yellow">5<br /><span>B</span><br />10.81<br /></p>
          <p className="yellow">13<br /><span>Al</span><br />26.982<br /></p>
          <p className="yellow">31<br /><span>Ga</span><br />69.723<br /></p>
          <p className="yellow">49<br /><span>In</span><br />114.82<br /></p>
          <p className="yellow">81<br /><span>Ti</span><br />204.38<br /></p>
          <p className="yellow">113<br /><span>Uut</span><br />[284.181]<br /></p>
          <p className="green">67<br /><span>Ho</span><br />164.93<br /></p>
          <p className="green">99<br /><span>Es</span><br />[252.08]<br /></p>
        </div>
        <div className="yellow_column2" style={{paddingLeft: 0}}>
          <p className="yellow">6<br /><span>C</span><br />12.011<br /></p>
          <p className="yellow">14<br /><span>Si</span><br />28.085<br /></p>
          <p className="yellow">32<br /><span>Ge</span><br />72.63<br /></p>
          <p className="yellow">50<br /><span>Sn</span><br />118.71<br /></p>
          <p className="yellow">82<br /><span>Pb</span><br />207.2<br /></p>
          <p className="yellow">114<br /><span>Fi</span><br />[289.19]<br /></p>
          <p className="green">68<br /><span>Er</span><br />167.26<br /></p>
          <p className="green">100<br /><span>Fm</span><br />[257.10]<br /></p>
        </div>
        <div className="yellow_column3" style={{paddingLeft: 0}}>
          <p className="yellow">7<br /><span>N</span><br />14.007<br /></p>
          <p className="yellow">15<br /><span>P</span><br />30.974<br /></p>
          <p className="yellow">33<br /><span>As</span><br />74.922<br /></p>
          <p className="yellow">51<br /><span>Sb</span><br />121.76<br /></p>
          <p className="yellow">83<br /><span>Bi</span><br />208.98<br /></p>
          <p className="yellow">115<br /><span>Uup</span><br />[288.19]<br /></p>
          <p className="green">69<br /><span>Tm</span><br />168.93<br /></p>
          <p className="green">101<br /><span>Md</span><br />[258.10]<br /></p>
        </div>
        <div className="yellow_column4" style={{paddingLeft: 0}}>
          <p className="yellow">8<br /><span>O</span><br />15.999<br /></p>
          <p className="yellow">16<br /><span>S</span><br />32.06<br /></p>
          <p className="yellow">34<br /><span>Se</span><br />78.96<br /></p>
          <p className="yellow">52<br /><span>Te</span><br />127.60<br /></p>
          <p className="yellow">84<br /><span>Po</span><br />[208.98]<br /></p>
          <p className="yellow">116<br /><span>Lv</span><br />[293]<br /></p>
          <p className="green">70<br /><span>Yb</span><br />173.05<br /></p>
          <p className="green">102<br /><span>No</span><br />[259.10]<br /></p>
        </div>
        <div className="yellow_column5" style={{paddingLeft: 0}}>
          <p className="yellow">9<br /><span>F</span><br />10.81<br /></p>
          <p className="yellow">17<br /><span>Ci</span><br />26.982<br /></p>
          <p className="yellow">35<br /><span>Br</span><br />69.723<br /></p>
          <p className="yellow">53<br /><span>I</span><br />114.82<br /></p>
          <p className="yellow">85<br /><span>At</span><br />204.38<br /></p>
          <p className="yellow">117<br /><span>Uus</span><br />[284.181]<br /></p>
        </div>
        <div className="yellow_column6" style={{paddingLeft: 0}}>
          <p className="yellow" style={{marginTop: 0}}>2<br /><span>He</span><br />4.0026<br /></p>
          <p className="yellow">10<br /><span>Ne</span><br />20.180<br /></p>
          <p className="yellow">18<br /><span>Ar</span><br />39.948<br /></p>
          <p className="yellow">36<br /><span>Kr</span><br />83.798<br /></p>
          <p className="yellow">54<br /><span>Xe</span><br />131.29<br /></p>
          <p className="yellow">86<br /><span>Rn</span><br />[222.02]<br /></p>
          <p className="yellow">118<br /><span>Uuo</span><br />[294]<br /></p>
        </div>
      </div>

      </div>
    );
  }
}