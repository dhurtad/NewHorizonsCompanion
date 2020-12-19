
function isWithinTime(fishTime)
{
    let d = new Date();
    let hour = d.getHours();    
    if(fishTime.includes(hour))
    {        
        return true;
    }
    return false;
}

function isWithinMonths(fishMonths)
{
    let d = new Date();
    let month = d.getMonth() + 1;
        
    if(fishMonths.includes(month))
    {        
        return true;
    }
    return false;
}

export function calcFishes(fishName, loadedFish, fishDict)
{
    let isAllYear = loadedFish["availability"]["isAllYear"];
    let isAllDay = loadedFish['availability']['isAllDay'];
    let fishTime = loadedFish['availability']['time-array'];
    let fishMonths = loadedFish['availability']['month-array-northern'];        

    if(isAllYear && isAllDay)
    {
        fishDict[fishName] = loadedFish;
    }
    else if(isAllYear && isAllDay === false)
    {
        if(isWithinTime(fishTime))
        {
            fishDict[fishName] = loadedFish;            
        }
    }
    else if(isAllYear === false && isAllDay === false)
    {
        if(isWithinTime(fishTime) && isWithinMonths(fishMonths))
        {
            fishDict[fishName] = loadedFish;
        }
    }
    else if(isAllYear === false && isAllDay)
    {
        if(isWithinMonths(fishMonths))
        {
            fishDict[fishName] = loadedFish;
        }
    }
}

