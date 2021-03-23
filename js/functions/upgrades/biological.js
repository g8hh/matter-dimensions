functions["upg_b01_cost"] = (amt) => {
    return big(10).pow((amt+1)/2+Math.floor(amt*amt/100));
}
functions["upg_b02_cost"] = (amt) => {
    return big(10).pow((amt+1)/2+Math.floor(amt*amt/100));
}
functions["upg_b03_cost"] = (amt) => {
    return big(10).pow((amt+1)/2+Math.floor(amt*amt/100));
}
functions["upg_b04_cost"] = (amt) => {
    return big(10).pow((amt+1)/2+Math.floor(amt*amt/100));
}



functions["upg_b01_power"] = (amt) => {
    return big(2).pow(amt);
}
functions["upg_b02_power"] = (amt) => {
    return big(1.3).pow(amt);
}
functions["upg_b03_power"] = (amt) => {
    return big(1.1).pow(amt);
}
functions["upg_b04_power"] = (amt) => {
    return big(1.2).pow(amt);
}



functions["upg_b01_unlock"] = () => {
    return true;
}
functions["upg_b02_unlock"] = () => {
    return true;
}
functions["upg_b03_unlock"] = () => {
    return true;
}
functions["upg_b04_unlock"] = () => {
    return true;
}



functions["upg_b01_available"] = () => {
    return true;
}
functions["upg_b02_available"] = () => {
    return true;
}
functions["upg_b03_available"] = () => {
    return true;
}
functions["upg_b04_available"] = () => {
    return true;
}