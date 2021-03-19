/*
Prime III

URL: http://www.PrimeVotingSystem.org

Copyright (c) 2015 University of Florida Research Foundation, Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>. 

*/


/* Zoom Functions */

var zoomBy = 1.0;
function zoomIn()
{
  	var zoomData = document.getElementById('myDocument');
  	zoomBy = zoomBy + 0.1;

	if (navigator.userAgent.indexOf('Firefox') > -1)
	{
		zoomData.style.MozTransform = "scale(" + zoomBy + ")";
		zoomData.style.MozTransformOrigin = "0 0";
	}
	else
	{
  		zoomData.style.zoom = zoomBy;
  		zoomData.style.webkitTransform = "scale(zoomBy)";
	}		
}

function zoomOut()
{
	var zoomData = document.getElementById('myDocument');
	zoomBy = zoomBy - 0.1;

	if (navigator.userAgent.indexOf('Firefox') > -1)
	{
		zoomData.style.MozTransform = "scale(" + zoomBy + ")";
		zoomData.style.MozTransformOrigin = "0 0";
	}
	else
	{
		zoomData.style.zoom = zoomBy;
		zoomData.style.webkitTransform = "scale(zoomBy)";
	}	
}
