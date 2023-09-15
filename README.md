*question 1 : Add at least 3 Project features

--Here is my most interesting features in this projects --
1.Here I have created such a functionality that on clicking each card button, the credit time will be added to the total credit.
By clicking on each card button, the credit time will be added to the total credit and the Remaining will be shown minus 20 hours.
2.Adding another nice feature, the feature is such that if you click on a card more than once, a toast will show.
3.And the last nice feature is,,when the remaining time is more than 20 hours, it will show a toast.



*question 2 : Discuss how you managed the state in your assignment project.

--Discussing how I managed my assignment states--

First of all, I created some components, then I created a useState to store the json values ​​in one place and set them in it, I fetched the json data with useEffect.  Then I used each props where I needed them, useState helped me a lot to store the data, then I converted them into objects as needed.  UseState has a default value of array if it is empty array.  If object is empty object, I also did this, because my data was inside the array, so I gave empty array like this, useState([])