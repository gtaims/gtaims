---
layout: page
image: /assets/images/logo_bluegold_aspect_2_1.png
image_header: /assets/images/aims-logo.png
title: # Leave it blank
headtitle: Home | The Artificial Intelligence for Medicine and Healthcare Society
permalink: /
---
<div id="home">
  <div class="row">
    <div class="col-lg-5">
      <div class="vspace-md"></div>
      <p>
        <span id="welcome">Welcome! </span> 
      </p>
      <p>
        To our knowledge, we are the first student organization in our field in the country. As an organization of both undergraduate and graduate students, we are dedicated to (1) helping one another become the next generation of leaders within the field of AI for healthcare and medicine, (2) to helping curious students learn more about the field, and (3) to broadly creating a strong community around the field at Georgia Tech.
      </p>
      <p>
      <div id="scroll-text"><i class="fa fa-arrow-down"></i>&nbsp;&nbsp;Scroll to see more!&nbsp;&nbsp;<i class="fa fa-arrow-down"></i></div>
      </p>
    </div>
    <!-- <div class="col-lg-1"></div> -->
    <div class="col-lg-7">
      <div class="carousel">
       {% for item in site.data.gallery %}
          <div>
          <img class="w-100" alt="Picture of {{ item.image }}" src="{{ item.image | prepend: site.baseurl }}" />
          <p>{{ item.description }}</p>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="vspace-lg"></div>

  <div class="row">
      <div class="col-lg-3 col-md-12 col-sm-12">
        <div class="card">
        <a target="_blank" href="{{ group.website }}">
          <div class="card-body">
            <h5 class="group-name text-center">
                Activities 1
            </h5>
            <div class="card-text">              
              <hr>
              <h2 class="group-professor">yes </h2>
              Description
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12">
        <div class="card">
        <a target="_blank" href="{{ group.website }}">
          <div class="card-body">
            <h5 class="group-name text-center">
                Activities 2
            </h5>
            <div class="card-text">              
              <hr>
              <h2 class="group-professor">yes </h2>
              Description
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12">
        <div class="card">
        <a target="_blank" href="{{ group.website }}">
          <div class="card-body">
            <h5 class="group-name text-center">
                Activities 3
            </h5>
            <div class="card-text">              
              <hr>
              <h2 class="group-professor">yes </h2>
              Description
            </div>
          </div>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12">
        <div class="card">
        <a target="_blank" href="{{ group.website }}">
          <div class="card-body">
            <h5 class="group-name text-center">
                Activities 4
            </h5>
            <div class="card-text">              
              <hr>
              <h2 class="group-professor">yes </h2>
              Description
            </div>
          </div>
          </a>
        </div>
      </div>



<script>
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });
</script>



<script>
    $('.news-item').click(e => {

        if ($(e.currentTarget).hasClass('active-news-item')) {
            $(e.currentTarget).removeClass('active-news-item');

            $('.news-item .description').css('display', 'none');

            $('.short-description').addClass('collapsed');

            $('.thumbnail-container').removeClass('col-lg-12');
            $('.thumbnail-container').addClass('col-lg-5');

            $('.short-description-container').removeClass('col-lg-12');
            $('.short-description-container').addClass('col-lg-5');

        } else {
            $('.news-item').removeClass('active-news-item');
            $(e.currentTarget).addClass('active-news-item');

            $('.news-item .description').css('display', 'none');
            $(e.currentTarget).find('.description').css('display', 'block');

            $(e.currentTarget).find('.collapsed').removeClass('collapsed');

            $('.thumbnail-container').removeClass('col-lg-12');
            $('.thumbnail-container').addClass('col-lg-5');
            $(e.currentTarget).find('.thumbnail-container').removeClass('col-lg-5');
            $(e.currentTarget).find('.thumbnail-container').addClass('col-lg-12');

            $('.short-description-container').removeClass('col-lg-12');
            $('.short-description-container').addClass('col-lg-5');
            $(e.currentTarget).find('.short-description-container').removeClass('col-lg-5');
            $(e.currentTarget).find('.short-description-container').addClass('col-lg-12');
        }
    });
</script>