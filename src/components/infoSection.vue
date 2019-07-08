<template>
    <div>
      <div class="prg sec-child">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      </div>
      <div class="img-co sec-child">
        <img src="../assets/snow-1209835_1920.jpg" alt="hiking-img">
      </div>
    </div>
</template>

<script>
export default {
    name: "info"
}
</script>

<style scoped>
.img-co {
    display: inline-block;
    width: 80%;
    margin: 20px auto;
  }

.img-co > img {
max-width: 100%;
border-radius: 8px;

}

.prg {
display: inline-block;
width: 80%;
text-align: justify;
padding: 0 25px;
margin: 20px auto;
}

.mini-sec {
width: 100%;
}

.mini-sec > img {
width: 100%;
}

@media only screen and (min-width: 960px) {
  .sec-child {width: 45%;}
}

</style>


