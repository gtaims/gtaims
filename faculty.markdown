---
layout: page
image_header: 
intro: 
title: Officers
headtitle: Officers | The Artificial Intelligence for Medicine and Healthcare Society
permalink: /officers/
---
<div id="faculty" class="row">
    {% assign core-faculty = site.faculty | where_exp:"faculty",
    "faculty.type == 'core'" %}
    {% for person in core-faculty %}
    <div class="col-lg-6 col-md-6 col-sm-6 large-card-container">
        <div class="large-card">
            <div class="row no-gutters">
                <div class="col-lg-5 col-md-12 col-sm-12"> 
                    <img class="w-100" alt="Picture of {{ person.image }}" src="{{ person.image | prepend: site.baseurl }}"/>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="description p-l-md">
                        <h2>
                            {{ person.name }}                    
                        </h2>
                        <h3>{{ person.role }}</h3>
                        <br />
                        <div class="tags">
                        {% for keyword in person.keywords %}
                            <span class="badge badge-secondary"> {{ keyword }} </span>
                        {% endfor %}
                        </div>
                        <br/><br/>
                        <div class="sc-links">
                            {% if person.email %}
                            <a target="_blank" href="mailto: {{ person.email }}"><i class="fa fa-envelope"></i></a>
                            {% endif %}
                            {% if person.linkedin %}
                            <a target="_blank" href="{{ person.linkedin }}"><i class="fa fa-linkedin"></i></a>
                            {% endif %}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
<div class="vspace-lg"></div>
