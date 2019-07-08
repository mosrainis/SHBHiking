<template>
    <div>
        <h2>مروری بر برنامه‌های گذشته</h2>
        <div id="co1" class="box"></div>
        <div id="co2" class="box"></div>
        <div id="co3" class="box"></div>
        <div class="divider">
            <div class="line"></div>
            <button>READ MORE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "contentSection"
}
</script>

<style scoped>

.box {
    display: inline-block;
    width: 80%;
    height: 30vh;
    margin: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

#co1 {
    background-image: url("../assets/home-images/campfire-896196_1920.jpg");
}

#co2 {
    background-image: url("../assets/home-images/summit-1209168_1920.jpg");
}

#co3 {
    background-image: url("../assets/home-images/tent-548022_1920.jpg");
}

.divider {
    width: 100%;
    clear: both;
}

button {
    display: inline-block;
    background: #17212D;
    color: #c8c8c8;
    width: 50%;
    height: 55px;
    border: none;
    border-radius: 5px;
    font-family: elianto;
    font-size: 15px;
    cursor: pointer;
    transition: all 150ms;
}button:focus {
    box-shadow: 0px 5px 8px #5d5d5d; 
    color: #fff;
    background: #3d5779;
    outline: none;
}

.line {
    display: inline-block;
    width: 51%;
    height: 5px;
    background: #17212D;
}

h2 {display: none;}

@media only screen and (min-width: 960px) {
  .box {width: 30%;}
  button {width: 15%;}button:hover , button:focus {width: 20%;}
  .line {width: 70%; margin-left: 15px;}
  h2 {
    display: block;
    font-size: 23px;
    background: #CACACA;
    padding: 0px 20px;
    position: absolute;
    top: -20px;
    right: 10%;
  }
}

</style>
