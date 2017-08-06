import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import style from './main.css';
require('./main.css');

export default class Elementos extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <h1 className="title">Elementos</h1>

      <div id="wrapper">
        <div>
          <ul>{/*First row*/}
            <li className={style.red}>Grupo Período</li>
            <li className={style.red}>1</li>
            <li className={style.red}>2</li>
            <li className="space red">3</li>
            <li className={style.red}>4</li>
            <li className={style.red}>5</li>
            <li className={style.red}>6</li>
            <li className={style.red}>7</li>
            <li className={style.red}>8</li>
            <li className={style.red}>9</li>
            <li className={style.red}>10</li>
            <li className={style.red}>11</li>
            <li className={style.red}>12</li>
            <li className={style.red}>13</li>
            <li className={style.red}>14</li>
            <li className={style.red}>15</li>
            <li className={style.red}>16</li>
            <li className={style.red}>17</li>
            <li className={style.red}>18</li>
          </ul>{/*Close First row*/}
          <ul>{/*Second Row*/}
            <li className={style.red}>1</li>
            <li className="s-block">
              <p>1</p>
              <p className={style.element}>H</p>
              <p className={style.weight}>1.008</p>
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
              <p className={style.element}>He</p>
              <p className={style.weight}>4.0026</p>
            </li>
          </ul>{/*Close Second row*/}
          <ul>{/*Third Row*/}
            <li className={style.red}>2</li>
            <li className="s-block">
              <p>3</p>
              <p className={style.element}>Li</p>
              <p className={style.weight}>6.94</p>
            </li>
            <li className="s-block">
              <p>4</p>
              <p className={style.element}>Be</p>
              <p className={style.weight}>9.0122</p>
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
              <p className={style.element}>B</p>
              <p className={style.weight}>10.81</p>
            </li>
            <li className="p-block">
              <p>6</p>
              <p className={style.element}>C</p>
              <p className={style.weight}>12.011</p>
            </li>
            <li className="p-block">
              <p>7</p>
              <p className={style.element}>N</p>
              <p className={style.weight}>14.007</p>
            </li>
            <li className="p-block">
              <p>8</p>
              <p className={style.element}>O</p>
              <p className={style.weight}>15.999</p>
            </li>
            <li className="p-block">
              <p>9</p>
              <p className={style.element}>F</p>
              <p className={style.weight}>18.998</p>
            </li>
            <li className="p-block">
              <p>10</p>
              <p className={style.element}>Ne</p>
              <p className={style.weight}>20.180</p>
            </li>
          </ul>{/*Close Third row*/}
          <ul>{/*Forth Row*/}
            <li className={style.red}>3</li>
            <li className="s-block">
              <p>11</p>
              <p className={style.element}>Na</p>
              <p className={style.weight}>22.990</p>
            </li>
            <li className="s-block">
              <p>12</p>
              <p className={style.element}>Mg</p>
              <p className={style.weight}>24</p>
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
              <p className={style.element}>Al</p>
              <p className={style.weight}>26.982</p>
            </li>
            <li className="p-block">
              <p>14</p>
              <p className={style.element}>Si</p>
              <p className={style.weight}>28.085</p>
            </li>
            <li className="p-block">
              <p>15</p>
              <p className={style.element}>P</p>
              <p className={style.weight}>30.974</p>
            </li>
            <li className="p-block">
              <p>16</p>
              <p className={style.element}>S</p>
              <p className={style.weight}>32.45</p>
            </li>
            <li className="p-block">
              <p>17</p>
              <p className={style.element}>Cl</p>
              <p className={style.weight}>35.45</p>
            </li>
            <li className="p-block">
              <p>18</p>
              <p className={style.element}>Ar</p>
              <p className={style.weight}>39.948</p>
            </li>
          </ul>{/*Close Forth row*/}
          <ul>{/*Fifth Row*/}
            <li className={style.red}>4</li>
            <li className="s-block">
              <p>19</p>
              <p className={style.element}>Na</p>
              <p className={style.weight}>22.990</p>
            </li>
            <li className="s-block">
              <p>20</p>
              <p className={style.element}>Mg</p>
              <p className={style.weight}>24</p>
            </li>
            <li className="d-block space">
              <p>21</p>
              <p className={style.element}>Sc</p>
              <p className={style.weight}>44.956</p>
            </li>
            <li className="d-block">
              <p>22</p>
              <p className={style.element}>Ti</p>
              <p className={style.weight}>47.867</p>
            </li>
            <li className="d-block">
              <p>23</p>
              <p className={style.element}>V</p>
              <p className={style.weight}>50.942</p>
            </li>
            <li className="d-block">
              <p>24</p>
              <p className={style.element}>Cr</p>
              <p className={style.weight}>51.996</p>
            </li>
            <li className="d-block">
              <p>25</p>
              <p className={style.element}>Mn</p>
              <p className={style.weight}>54.938</p>
            </li>
            <li className="d-block">
              <p>26</p>
              <p className={style.element}>Fe</p>
              <p className={style.weight}>55.845</p>
            </li>
            <li className="d-block">
              <p>27</p>
              <p className={style.element}>Co</p>
              <p className={style.weight}>58.933</p>
            </li>
            <li className="d-block">
              <p>28</p>
              <p className={style.element}>Ni</p>
              <p className={style.weight}>58.693</p>
            </li>
            <li className="d-block">
              <p>29</p>
              <p className={style.element}>Cu</p>
              <p className={style.weight}>63.38</p>
            </li>
            <li className="d-block">
              <p>30</p>
              <p className={style.element}>Zn</p>
              <p className={style.weight}>65.38</p>
            </li>
            <li className="p-block">
              <p>31</p>
              <p className={style.element}>Ga</p>
              <p className={style.weight}>69.723</p>
            </li>
            <li className="p-block">
              <p>32</p>
              <p className={style.element}>Ge</p>
              <p className={style.weight}>72.63</p>
            </li>
            <li className="p-block">
              <p>33</p>
              <p className={style.element}>As</p>
              <p className={style.weight}>74.922</p>
            </li>
            <li className="p-block">
              <p>34</p>
              <p className={style.element}>Se</p>
              <p className={style.weight}>78.96</p>
            </li>
            <li className="p-block">
              <p>35</p>
              <p className={style.element}>Br</p>
              <p className={style.weight}>79.904</p>
            </li>
            <li className="p-block">
              <p>36</p>
              <p className={style.element}>Kr</p>
              <p className={style.weight}>83.798</p>
            </li>
          </ul>{/*Close Fifth row*/}
          <ul>{/*Sixth Row*/}
            <li className={style.red}>5</li>
            <li className="s-block">
              <p>37</p>
              <p className={style.element}>Rb</p>
              <p className={style.weight}>22.990</p>
            </li>
            <li className="s-block">
              <p>38</p>
              <p className={style.element}>Sr</p>
              <p className={style.weight}>24</p>
            </li>
            <li className="d-block space">
              <p>39</p>
              <p className={style.element}>Y</p>
              <p className={style.weight}>44.956</p>
            </li>
            <li className="d-block">
              <p>40</p>
              <p className={style.element}>Zr</p>
              <p className={style.weight}>47.867</p>
            </li>
            <li className="d-block">
              <p>41</p>
              <p className={style.element}>Nb</p>
              <p className={style.weight}>50.942</p>
            </li>
            <li className="d-block">
              <p>42</p>
              <p className={style.element}>Mo</p>
              <p className={style.weight}>51.996</p>
            </li>
            <li className="d-block">
              <p>43</p>
              <p className={style.element}>Tc</p>
              <p className={style.weight}>54.938</p>
            </li>
            <li className="d-block">
              <p>44</p>
              <p className={style.element}>Ru</p>
              <p className={style.weight}>55.845</p>
            </li>
            <li className="d-block">
              <p>45</p>
              <p className={style.element}>Rh</p>
              <p className={style.weight}>58.933</p>
            </li>
            <li className="d-block">
              <p>46</p>
              <p className={style.element}>Pd</p>
              <p className={style.weight}>58.693</p>
            </li>
            <li className="d-block">
              <p>47</p>
              <p className={style.element}>Ag</p>
              <p className={style.weight}>63.38</p>
            </li>
            <li className="d-block">
              <p>48</p>
              <p className={style.element}>Cd</p>
              <p className={style.weight}>65.38</p>
            </li>
            <li className="p-block">
              <p>49</p>
              <p className={style.element}>In</p>
              <p className={style.weight}>69.723</p>
            </li>
            <li className="p-block">
              <p>50</p>
              <p className={style.element}>Sn</p>
              <p className={style.weight}>72.63</p>
            </li>
            <li className="p-block">
              <p>51</p>
              <p className={style.element}>Sb</p>
              <p className={style.weight}>74.922</p>
            </li>
            <li className="p-block">
              <p>52</p>
              <p className={style.element}>Te</p>
              <p className={style.weight}>78.96</p>
            </li>
            <li className="p-block">
              <p>53</p>
              <p className={style.element}>I</p>
              <p className={style.weight}>79.904</p>
            </li>
            <li className="p-block">
              <p>54</p>
              <p className={style.element}>Xe</p>
              <p className={style.weight}>83.798</p>
            </li>
          </ul>{/*Close Sixth row*/}
          <ul>{/*Seventh Row*/}
            <li className={style.red}>6</li>
            <li className="s-block">
              <p>55</p>
              <p className={style.element}>Cs</p>
              <p className={style.weight}>22.990</p>
            </li>
            <li className="s-block">
              <p>56</p>
              <p className={style.element}>Ba</p>
              <p className={style.weight}>24</p>
            </li>
            <li className="Lu red">*</li>
            <li className="d-block">
              <p>71</p>
              <p className={style.element}>Lu</p>
              <p className={style.weight}>44.956</p>
            </li>
            <li className="d-block">
              <p>72</p>
              <p className={style.element}>Hf</p>
              <p className={style.weight}>47.867</p>
            </li>
            <li className="d-block">
              <p>73</p>
              <p className={style.element}>Ta</p>
              <p className={style.weight}>50.942</p>
            </li>
            <li className="d-block">
              <p>74</p>
              <p className={style.element}>W</p>
              <p className={style.weight}>51.996</p>
            </li>
            <li className="d-block">
              <p>75</p>
              <p className={style.element}>Re</p>
              <p className={style.weight}>54.938</p>
            </li>
            <li className="d-block">
              <p>76</p>
              <p className={style.element}>Os</p>
              <p className={style.weight}>55.845</p>
            </li>
            <li className="d-block">
              <p>77</p>
              <p className={style.element}>Ir</p>
              <p className={style.weight}>58.933</p>
            </li>
            <li className="d-block">
              <p>78</p>
              <p className={style.element}>Pt</p>
              <p className={style.weight}>58.693</p>
            </li>
            <li className="d-block">
              <p>79</p>
              <p className={style.element}>Au</p>
              <p className={style.weight}>63.38</p>
            </li>
            <li className="d-block">
              <p>80</p>
              <p className={style.element}>Hg</p>
              <p className={style.weight}>65.38</p>
            </li>
            <li className="p-block">
              <p>81</p>
              <p className={style.element}>Tl</p>
              <p className={style.weight}>69.723</p>
            </li>
            <li className="p-block">
              <p>82</p>
              <p className={style.element}>Pb</p>
              <p className={style.weight}>72.63</p>
            </li>
            <li className="p-block">
              <p>83</p>
              <p className={style.element}>Bi</p>
              <p className={style.weight}>74.922</p>
            </li>
            <li className="p-block">
              <p>84</p>
              <p className={style.element}>Po</p>
              <p className={style.weight}>78.96</p>
            </li>
            <li className="p-block">
              <p>85</p>
              <p className={style.element}>At</p>
              <p className={style.weight}>79.904</p>
            </li>
            <li className="p-block">
              <p>86</p>
              <p className={style.element}>Rn</p>
              <p className={style.weight}>83.798</p>
            </li>
          </ul>{/*Close Seventh row*/}
          <ul>{/*Eigth Row*/}
            <li className={style.red}>7</li>
            <li className="s-block">
              <p>87</p>
              <p className={style.element}>Fr</p>
              <p className={style.weight}>22.990</p>
            </li>
            <li className="s-block">
              <p>88</p>
              <p className={style.element}>Ra</p>
              <p className={style.weight}>24</p>
            </li>
            <li className="Lr red">**</li>
            <li className="d-block">
              <p>103</p>
              <p className={style.element}>Lr</p>
              <p className={style.weight}>44.956</p>
            </li>
            <li className="d-block">
              <p>104</p>
              <p className={style.element}>Rf</p>
              <p className={style.weight}>47.867</p>
            </li>
            <li className="d-block">
              <p>105</p>
              <p className={style.element}>Db</p>
              <p className={style.weight}>50.942</p>
            </li>
            <li className="d-block">
              <p>106</p>
              <p className={style.element}>Sg</p>
              <p className={style.weight}>51.996</p>
            </li>
            <li className="d-block">
              <p>107</p>
              <p className={style.element}>Bh</p>
              <p className={style.weight}>54.938</p>
            </li>
            <li className="d-block">
              <p>108</p>
              <p className={style.element}>Hs</p>
              <p className={style.weight}>55.845</p>
            </li>
            <li className="d-block">
              <p>109</p>
              <p className={style.element}>Mt</p>
              <p className={style.weight}>58.933</p>
            </li>
            <li className="d-block">
              <p>110</p>
              <p className={style.element}>Ds</p>
              <p className={style.weight}>58.693</p>
            </li>
            <li className="d-block">
              <p>111</p>
              <p className={style.element}>Rg</p>
              <p className={style.weight}>63.38</p>
            </li>
            <li className="d-block">
              <p>112</p>
              <p className={style.element}>Cn</p>
              <p className={style.weight}>65.38</p>
            </li>
            <li className="p-block">
              <p>113</p>
              <p className={style.element}>Uut</p>
              <p className={style.weight}>69.723</p>
            </li>
            <li className="p-block">
              <p>114</p>
              <p className={style.element}>Fl</p>
              <p className={style.weight}>72.63</p>
            </li>
            <li className="p-block">
              <p>115</p>
              <p className={style.element}>Uup</p>
              <p className={style.weight}>74.922</p>
            </li>
            <li className="p-block">
              <p>116</p>
              <p className={style.element}>Lv</p>
              <p className={style.weight}>78.96</p>
            </li>
            <li className="p-block">
              <p>117</p>
              <p className={style.element}>Uus</p>
              <p className={style.weight}>79.904</p>
            </li>
            <li className="p-block">
              <p>118</p>
              <p className={style.element}>Uuo</p>
              <p className={style.weight}>83.798</p>
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
              <p className={style.element}>La</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>58</p>
              <p className={style.element}>Ce</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>59</p>
              <p className={style.element}>Pr</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>60</p>
              <p className={style.element}>Nd</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>61</p>
              <p className={style.element}>Pm</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>62</p>
              <p className={style.element}>Sm</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>63</p>
              <p className={style.element}>Eu</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>64</p>
              <p className={style.element}>Gd</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>65</p>
              <p className={style.element}>Tb</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>66</p>
              <p className={style.element}>Dy</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>67</p>
              <p className={style.element}>Ho</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>68</p>
              <p className={style.element}>Er</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>69</p>
              <p className={style.element}>Tm</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>70</p>
              <p className={style.element}>Yb</p>
              <p className={style.weight}>138.91</p>
            </li>
          </ul>
          <div className="clear">
          </div>
          <p className="left red">**Actinoids</p>
          <ul>
            <li className="f-block">
              <p>89</p>
              <p className={style.element}>Ac</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>90</p>
              <p className={style.element}>Th</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>91</p>
              <p className={style.element}>Pa</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>92</p>
              <p className={style.element}>U</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>93</p>
              <p className={style.element}>Np</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>94</p>
              <p className={style.element}>Pu</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>95</p>
              <p className={style.element}>Am</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>96</p>
              <p className={style.element}>Cm</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>97</p>
              <p className={style.element}>Bk</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>98</p>
              <p className={style.element}>Cf</p>
              <p className={style.weight}>138.91</p>
            </li>
            <p>99</p>
            <li className="f-block">
              <p className={style.element}>Es</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>100</p>
              <p className={style.element}>Fm</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>101</p>
              <p className={style.element}>Md</p>
              <p className={style.weight}>138.91</p>
            </li>
            <li className="f-block">
              <p>102</p>
              <p className={style.element}>No</p>
              <p className={style.weight}>138.91</p>
            </li>
          </ul>
        </div>{/*Close Lanthanoids and Actinoids div*/}
      </div>{/*Close Wrapper*/}

      </div>
    );
  }
}
