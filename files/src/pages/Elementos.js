import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const nativeCSS = require('native-css')

const styles = StyleSheet.create({
  "*": {
    "margin": "0",
    "padding": "0"
  },
  "body": {
    "font-family": "Arial, Helvetica, sans-serif"
  },
  "li": {
    "display": "inline-block",
    "width": "50px",
    "float": "left",
    "height": "60px",
    "margin": "1px",
    "text-align": "center"
  },
  "wrapper": {
    "width": "1015px",
    "margin": "0 auto"
  },
  "bottom_rows": {
    "margin-top": "25px"
  },
  "element": {
    "font-weight": "bold"
  },
  "weight": {
    "font-size": ".7em"
  },
  "s_block": {
    "background-color": "blue"
  },
  "d_block": {
    "background-color": "red"
  },
  "p_block": {
    "background-color": "orange"
  },
  "f_block": {
    "background-color": "green"
  },
  "space": {
    "margin-left": "21px"
  },
  "left": {
    "float": "left",
    "width": "175px",
    "margin-top": "25px"
  },
  "red": {
    "color": "red"
  },
  "Lu": {
    "width": "18px"
  },
  "Lr": {
    "width": "18px"
  },
  "clear": {
    "clear": "both"
  }
});

export default class Elementos extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <h1 className="title">Lista de Elementos</h1>

      <div id="wrapper">
        <div>
          <ul>{/*First row*/}
            <li className="red">Grupo Período</li>
            <li className="red">1</li>
            <li className="red">2</li>
            <li className="space red">3</li>
            <li className="red">4</li>
            <li className="red">5</li>
            <li className="red">6</li>
            <li className="red">7</li>
            <li className="red">8</li>
            <li className="red">9</li>
            <li className="red">10</li>
            <li className="red">11</li>
            <li className="red">12</li>
            <li className="red">13</li>
            <li className="red">14</li>
            <li className="red">15</li>
            <li className="red">16</li>
            <li className="red">17</li>
            <li className="red">18</li>
          </ul>{/*Close First row*/}
          <ul>{/*Second Row*/}
            <li className="red">1</li>
            <li className="s-block">
              <p>1</p>
              <p className="element">H</p>
              <p className="weight">1.008</p>
            </li>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li className="p-block space">
              <p>2</p>
              <p className="element">He</p>
              <p className="weight">4.0026</p>
            </li>
          </ul>{/*Close Second row*/}
          <ul>{/*Third Row*/}
            <li className="red">2</li>
            <li className="s-block">
              <p>3</p>
              <p className="element">Li</p>
              <p className="weight">6.94</p>
            </li>
            <li className="s-block">
              <p>4</p>
              <p className="element">Be</p>
              <p className="weight">9.0122</p>
            </li>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li className="p-block space">
              <p>5</p>
              <p className="element">B</p>
              <p className="weight">10.81</p>
            </li>
            <li className="p-block">
              <p>6</p>
              <p className="element">C</p>
              <p className="weight">12.011</p>
            </li>
            <li className="p-block">
              <p>7</p>
              <p className="element">N</p>
              <p className="weight">14.007</p>
            </li>
            <li className="p-block">
              <p>8</p>
              <p className="element">O</p>
              <p className="weight">15.999</p>
            </li>
            <li className="p-block">
              <p>9</p>
              <p className="element">F</p>
              <p className="weight">18.998</p>
            </li>
            <li className="p-block">
              <p>10</p>
              <p className="element">Ne</p>
              <p className="weight">20.180</p>
            </li>
          </ul>{/*Close Third row*/}
          <ul>{/*Forth Row*/}
            <li className="red">3</li>
            <li className="s-block">
              <p>11</p>
              <p className="element">Na</p>
              <p className="weight">22.990</p>
            </li>
            <li className="s-block">
              <p>12</p>
              <p className="element">Mg</p>
              <p className="weight">24</p>
            </li>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li className="p-block space">
              <p>13</p>
              <p className="element">Al</p>
              <p className="weight">26.982</p>
            </li>
            <li className="p-block">
              <p>14</p>
              <p className="element">Si</p>
              <p className="weight">28.085</p>
            </li>
            <li className="p-block">
              <p>15</p>
              <p className="element">P</p>
              <p className="weight">30.974</p>
            </li>
            <li className="p-block">
              <p>16</p>
              <p className="element">S</p>
              <p className="weight">32.45</p>
            </li>
            <li className="p-block">
              <p>17</p>
              <p className="element">Cl</p>
              <p className="weight">35.45</p>
            </li>
            <li className="p-block">
              <p>18</p>
              <p className="element">Ar</p>
              <p className="weight">39.948</p>
            </li>
          </ul>{/*Close Forth row*/}
          <ul>{/*Fifth Row*/}
            <li className="red">4</li>
            <li className="s-block">
              <p>19</p>
              <p className="element">Na</p>
              <p className="weight">22.990</p>
            </li>
            <li className="s-block">
              <p>20</p>
              <p className="element">Mg</p>
              <p className="weight">24</p>
            </li>
            <li className="d-block space">
              <p>21</p>
              <p className="element">Sc</p>
              <p className="weight">44.956</p>
            </li>
            <li className="d-block">
              <p>22</p>
              <p className="element">Ti</p>
              <p className="weight">47.867</p>
            </li>
            <li className="d-block">
              <p>23</p>
              <p className="element">V</p>
              <p className="weight">50.942</p>
            </li>
            <li className="d-block">
              <p>24</p>
              <p className="element">Cr</p>
              <p className="weight">51.996</p>
            </li>
            <li className="d-block">
              <p>25</p>
              <p className="element">Mn</p>
              <p className="weight">54.938</p>
            </li>
            <li className="d-block">
              <p>26</p>
              <p className="element">Fe</p>
              <p className="weight">55.845</p>
            </li>
            <li className="d-block">
              <p>27</p>
              <p className="element">Co</p>
              <p className="weight">58.933</p>
            </li>
            <li className="d-block">
              <p>28</p>
              <p className="element">Ni</p>
              <p className="weight">58.693</p>
            </li>
            <li className="d-block">
              <p>29</p>
              <p className="element">Cu</p>
              <p className="weight">63.38</p>
            </li>
            <li className="d-block">
              <p>30</p>
              <p className="element">Zn</p>
              <p className="weight">65.38</p>
            </li>
            <li className="p-block">
              <p>31</p>
              <p className="element">Ga</p>
              <p className="weight">69.723</p>
            </li>
            <li className="p-block">
              <p>32</p>
              <p className="element">Ge</p>
              <p className="weight">72.63</p>
            </li>
            <li className="p-block">
              <p>33</p>
              <p className="element">As</p>
              <p className="weight">74.922</p>
            </li>
            <li className="p-block">
              <p>34</p>
              <p className="element">Se</p>
              <p className="weight">78.96</p>
            </li>
            <li className="p-block">
              <p>35</p>
              <p className="element">Br</p>
              <p className="weight">79.904</p>
            </li>
            <li className="p-block">
              <p>36</p>
              <p className="element">Kr</p>
              <p className="weight">83.798</p>
            </li>
          </ul>{/*Close Fifth row*/}
          <ul>{/*Sixth Row*/}
            <li className="red">5</li>
            <li className="s-block">
              <p>37</p>
              <p className="element">Rb</p>
              <p className="weight">22.990</p>
            </li>
            <li className="s-block">
              <p>38</p>
              <p className="element">Sr</p>
              <p className="weight">24</p>
            </li>
            <li className="d-block space">
              <p>39</p>
              <p className="element">Y</p>
              <p className="weight">44.956</p>
            </li>
            <li className="d-block">
              <p>40</p>
              <p className="element">Zr</p>
              <p className="weight">47.867</p>
            </li>
            <li className="d-block">
              <p>41</p>
              <p className="element">Nb</p>
              <p className="weight">50.942</p>
            </li>
            <li className="d-block">
              <p>42</p>
              <p className="element">Mo</p>
              <p className="weight">51.996</p>
            </li>
            <li className="d-block">
              <p>43</p>
              <p className="element">Tc</p>
              <p className="weight">54.938</p>
            </li>
            <li className="d-block">
              <p>44</p>
              <p className="element">Ru</p>
              <p className="weight">55.845</p>
            </li>
            <li className="d-block">
              <p>45</p>
              <p className="element">Rh</p>
              <p className="weight">58.933</p>
            </li>
            <li className="d-block">
              <p>46</p>
              <p className="element">Pd</p>
              <p className="weight">58.693</p>
            </li>
            <li className="d-block">
              <p>47</p>
              <p className="element">Ag</p>
              <p className="weight">63.38</p>
            </li>
            <li className="d-block">
              <p>48</p>
              <p className="element">Cd</p>
              <p className="weight">65.38</p>
            </li>
            <li className="p-block">
              <p>49</p>
              <p className="element">In</p>
              <p className="weight">69.723</p>
            </li>
            <li className="p-block">
              <p>50</p>
              <p className="element">Sn</p>
              <p className="weight">72.63</p>
            </li>
            <li className="p-block">
              <p>51</p>
              <p className="element">Sb</p>
              <p className="weight">74.922</p>
            </li>
            <li className="p-block">
              <p>52</p>
              <p className="element">Te</p>
              <p className="weight">78.96</p>
            </li>
            <li className="p-block">
              <p>53</p>
              <p className="element">I</p>
              <p className="weight">79.904</p>
            </li>
            <li className="p-block">
              <p>54</p>
              <p className="element">Xe</p>
              <p className="weight">83.798</p>
            </li>
          </ul>{/*Close Sixth row*/}
          <ul>{/*Seventh Row*/}
            <li className="red">6</li>
            <li className="s-block">
              <p>55</p>
              <p className="element">Cs</p>
              <p className="weight">22.990</p>
            </li>
            <li className="s-block">
              <p>56</p>
              <p className="element">Ba</p>
              <p className="weight">24</p>
            </li>
            <li className="Lu red">*</li>
            <li className="d-block">
              <p>71</p>
              <p className="element">Lu</p>
              <p className="weight">44.956</p>
            </li>
            <li className="d-block">
              <p>72</p>
              <p className="element">Hf</p>
              <p className="weight">47.867</p>
            </li>
            <li className="d-block">
              <p>73</p>
              <p className="element">Ta</p>
              <p className="weight">50.942</p>
            </li>
            <li className="d-block">
              <p>74</p>
              <p className="element">W</p>
              <p className="weight">51.996</p>
            </li>
            <li className="d-block">
              <p>75</p>
              <p className="element">Re</p>
              <p className="weight">54.938</p>
            </li>
            <li className="d-block">
              <p>76</p>
              <p className="element">Os</p>
              <p className="weight">55.845</p>
            </li>
            <li className="d-block">
              <p>77</p>
              <p className="element">Ir</p>
              <p className="weight">58.933</p>
            </li>
            <li className="d-block">
              <p>78</p>
              <p className="element">Pt</p>
              <p className="weight">58.693</p>
            </li>
            <li className="d-block">
              <p>79</p>
              <p className="element">Au</p>
              <p className="weight">63.38</p>
            </li>
            <li className="d-block">
              <p>80</p>
              <p className="element">Hg</p>
              <p className="weight">65.38</p>
            </li>
            <li className="p-block">
              <p>81</p>
              <p className="element">Tl</p>
              <p className="weight">69.723</p>
            </li>
            <li className="p-block">
              <p>82</p>
              <p className="element">Pb</p>
              <p className="weight">72.63</p>
            </li>
            <li className="p-block">
              <p>83</p>
              <p className="element">Bi</p>
              <p className="weight">74.922</p>
            </li>
            <li className="p-block">
              <p>84</p>
              <p className="element">Po</p>
              <p className="weight">78.96</p>
            </li>
            <li className="p-block">
              <p>85</p>
              <p className="element">At</p>
              <p className="weight">79.904</p>
            </li>
            <li className="p-block">
              <p>86</p>
              <p className="element">Rn</p>
              <p className="weight">83.798</p>
            </li>
          </ul>{/*Close Seventh row*/}
          <ul>{/*Eigth Row*/}
            <li className="red">7</li>
            <li className="s-block">
              <p>87</p>
              <p className="element">Fr</p>
              <p className="weight">22.990</p>
            </li>
            <li className="s-block">
              <p>88</p>
              <p className="element">Ra</p>
              <p className="weight">24</p>
            </li>
            <li className="Lr red">**</li>
            <li className="d-block">
              <p>103</p>
              <p className="element">Lr</p>
              <p className="weight">44.956</p>
            </li>
            <li className="d-block">
              <p>104</p>
              <p className="element">Rf</p>
              <p className="weight">47.867</p>
            </li>
            <li className="d-block">
              <p>105</p>
              <p className="element">Db</p>
              <p className="weight">50.942</p>
            </li>
            <li className="d-block">
              <p>106</p>
              <p className="element">Sg</p>
              <p className="weight">51.996</p>
            </li>
            <li className="d-block">
              <p>107</p>
              <p className="element">Bh</p>
              <p className="weight">54.938</p>
            </li>
            <li className="d-block">
              <p>108</p>
              <p className="element">Hs</p>
              <p className="weight">55.845</p>
            </li>
            <li className="d-block">
              <p>109</p>
              <p className="element">Mt</p>
              <p className="weight">58.933</p>
            </li>
            <li className="d-block">
              <p>110</p>
              <p className="element">Ds</p>
              <p className="weight">58.693</p>
            </li>
            <li className="d-block">
              <p>111</p>
              <p className="element">Rg</p>
              <p className="weight">63.38</p>
            </li>
            <li className="d-block">
              <p>112</p>
              <p className="element">Cn</p>
              <p className="weight">65.38</p>
            </li>
            <li className="p-block">
              <p>113</p>
              <p className="element">Uut</p>
              <p className="weight">69.723</p>
            </li>
            <li className="p-block">
              <p>114</p>
              <p className="element">Fl</p>
              <p className="weight">72.63</p>
            </li>
            <li className="p-block">
              <p>115</p>
              <p className="element">Uup</p>
              <p className="weight">74.922</p>
            </li>
            <li className="p-block">
              <p>116</p>
              <p className="element">Lv</p>
              <p className="weight">78.96</p>
            </li>
            <li className="p-block">
              <p>117</p>
              <p className="element">Uus</p>
              <p className="weight">79.904</p>
            </li>
            <li className="p-block">
              <p>118</p>
              <p className="element">Uuo</p>
              <p className="weight">83.798</p>
            </li>
          </ul>
          {/*Close Eight row*/}
        </div>{/*Closes Top Section of Periodic Table Lanthanoids and Actinoids are below*/}
        <div className="clear">
        </div>
        <div id="bottom-rows">
          <p className="left red">*Lanthanoids</p>
          <ul>
            <li className="f-block">
              <p>57</p>
              <p className="element">La</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>58</p>
              <p className="element">Ce</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>59</p>
              <p className="element">Pr</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>60</p>
              <p className="element">Nd</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>61</p>
              <p className="element">Pm</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>62</p>
              <p className="element">Sm</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>63</p>
              <p className="element">Eu</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>64</p>
              <p className="element">Gd</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>65</p>
              <p className="element">Tb</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>66</p>
              <p className="element">Dy</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>67</p>
              <p className="element">Ho</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>68</p>
              <p className="element">Er</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>69</p>
              <p className="element">Tm</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>70</p>
              <p className="element">Yb</p>
              <p className="weight">138.91</p>
            </li>
          </ul>
          <div className="clear">
          </div>
          <p className="left red">**Actinoids</p>
          <ul>
            <li className="f-block">
              <p>89</p>
              <p className="element">Ac</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>90</p>
              <p className="element">Th</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>91</p>
              <p className="element">Pa</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>92</p>
              <p className="element">U</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>93</p>
              <p className="element">Np</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>94</p>
              <p className="element">Pu</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>95</p>
              <p className="element">Am</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>96</p>
              <p className="element">Cm</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>97</p>
              <p className="element">Bk</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>98</p>
              <p className="element">Cf</p>
              <p className="weight">138.91</p>
            </li>
            <p>99</p>
            <li className="f-block">
              <p className="element">Es</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>100</p>
              <p className="element">Fm</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>101</p>
              <p className="element">Md</p>
              <p className="weight">138.91</p>
            </li>
            <li className="f-block">
              <p>102</p>
              <p className="element">No</p>
              <p className="weight">138.91</p>
            </li>
          </ul>
        </div>{/*Close Lanthanoids and Actinoids div*/}
      </div>{/*Close Wrapper*/}

      </div>
    );
  }
}