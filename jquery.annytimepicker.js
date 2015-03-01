/**
 * @license
 * =========================================================
 * jquery.annytimepicker.js
 * http://schemax.in/opensource/annytimepicker
 * =========================================================
 * Copyright 2015 Schemax 
 *
 * Contributions:
 *  - G kalyan Raju
 *  - S Rama Krishna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================
 */
 (function($)){
 $.fn.annytimepicker=function(options)
 {
  var settings = $.extend({
            dateformat: "",
			}, options );
	//this.hide();
	var HoursDD ='<select class="Annytphour" ><option value="">Hours</option><option value="00">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>';
	var MinsDD ='<select class="Annytpminute" ><option value="">Minutes</option><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>';
	var ampmDD ="<select class='Annytpampm'> <option>AM</option><option>PM</option></select>";
	var AnnyContainer="<div class='AnnytpContainer'>"+HoursDD+MinsDD+ampmDD+"</div>";
	$(AnnyContainer).insertAfter(this);
	initialize(this);
 }
 function initialize(ele){
  $('.Annytphour').on('change', function(){updateInput(ele)});
  $('.Annytpminute').on('change', function(){updateInput(ele)});
  $('.Annytpampm').on('change', function(){updateInput(ele)});
  }
 
 var updateInput=function(ele){
$h=$('.Annytphour').val();
 $m=$('.Annytpminute').val();
 $ap=$('.Annytpampm').val(); 
$ftime=$h+':'+$m+' '+$ap;
ele.val($ftime);

}
}(jQuery));