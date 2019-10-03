jQuery(document).ready(function ($) {
    $('[data-toggle="collapse"]').click(function(){
        
    });
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }

            });



    });
    $('.search-filter .col-sm-auto').click(function () {
        $('.search-filter .col-sm-auto').each(function(i,obj) {
            $(obj).removeClass('active');
        });
        $(this).toggleClass('active');
    });
    $('.load-more').click(function () {
        $('.doctor-results').append('<div class="row"><div class="doctor col col-12 col-lg-6"><div class="doctor-card"><div class="doctor-image"><img src="/themes/custom/ukhc/images/doctors/kudrimoti-mahesh.jpg"/></div><div class="doctor-info"><div class="doctor-name">Mahesh R. Kudrimoti, MD</div><div class="doctor-title">Vice-Chair of Clinical Operations<br/><br/></div><div class="rating row"><div class="col col-6 star-ratings-css"><div class="top" style="width: 89%"><span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> <div class="bottom"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> </div> <div class="col-6 rating-number">4.88 out of 5</div> </div> <div class="profile-link"> <a href="">View Profile</a> <div class="right-angle blue"></div> </div> </div> </div> </div> <div class="doctor col col-12 col-lg-6"> <div class="doctor-card"> <div class="doctor-image"> <img src="/themes/custom/ukhc/images/doctors/szabunio-margaret.jpg"/> </div> <div class="doctor-info"> <div class="doctor-name">Margaret M. Szabunio, MD</div> <div class="doctor-title">Chief, Division of Women\'s Radiology<br/>Associate Medical Director,<br/>Comprehensive Breast Care Center</div> <div class="rating row"> <div class="col col-6 star-ratings-css"> <div class="top" style="width: 80%"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> <div class="bottom"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> </div> <div class="col-6 rating-number">4.88 out of 5</div> </div> <div class="profile-link"> <a href="">View Profile</a> <div class="right-angle blue"></div> </div> </div> </div> </div> </div> <div class="row"> <div class="doctor col col-12 col-lg-6"> <div class="doctor-card"> <div class="doctor-image"> <img src="/themes/custom/ukhc/images/doctors/van-horne-craig.jpg"/> </div> <div class="doctor-info"> <div class="doctor-name">Craig G. van Horne, MD, PhD</div> <div class="doctor-title">Vice Chairman, Department of Neurosurgery<br/>Co-director, Brain Restoration Center<br/>Virginia T. Barrow Endowed Chair</div> <div class="rating row"> <div class="col col-6 star-ratings-css"> <div class="top" style="width: 68%"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> <div class="bottom"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> </div> <div class="col-6 rating-number">4.88 out of 5</div> </div> <div class="profile-link"> <a href="">View Profile</a> <div class="right-angle blue"></div> </div> </div> </div> </div> <div class="doctor col col-12 col-lg-6"> <div class="doctor-card"> <div class="doctor-image"> <img src="/themes/custom/ukhc/images/doctors/aneja-arun.jpg"/> </div> <div class="doctor-info"> <div class="doctor-name">Arun Aneja, MD</div> <div class="doctor-title">Orthopaedic Surgery<br/>Orthopaedic Trauma<br/><br/></div> <div class="rating row"> <div class="col col-6 star-ratings-css"> <div class="top" style="width: 89%"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> <div class="bottom"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>★</span> </div> </div> <div class="col-6 rating-number">4.88 out of 5</div> </div> <div class="profile-link"> <a href="">View Profile</a> <div class="right-angle blue"></div> </div> </div> </div> </div> </div>');
    });
    $('.navbar-button,.menu-label').click(function () {
        $('.side-menu').removeClass('covered');
        $("#nav-icon").toggleClass('open');
        $(".dark-overlay").toggleClass('off');
        $("body").toggleClass('no-scroll');
        $('.side-menu.primary').toggleClass('open');
        $(".side-menu.secondary,.side-menu.tertiary").removeClass("open");
        $('.side-menu li').removeClass("hovered");
        $('.menu-label').html(jQuery('.menu-label').html() == 'Menu' ? 'Close' : 'Menu');
    });
    if ($(window).width() > 768) {
        $('.side-menu.primary li').hover(function () {
            if ($(this).hasClass("last")) {
                $('.side-menu.tertiary,.side-menu.secondary').removeClass('open');
            }
            $('.side-menu.primary li').removeClass("hovered");
            $('.side-menu.tertiary').removeClass('open');
            $(this).addClass("hovered");

            var id = $(this).attr('nav');
            var label = $.trim($(this).text());
            var parent = $(this).attr('parent');
            var subparent = $(this).attr('subparent');
            var subnav = getSubnav(id, parent, subparent);
            var subnavHtml = generateSubnav(subnav, label);
            if ($(this).hasClass("expand")) {
                $('.side-menu.secondary').attr('parent', $(this).attr("nav"));
                $('.side-menu.secondary').addClass('open');
                $('.side-menu.secondary').html(subnavHtml);
                $('.side-menu.secondary li').hover(function () {
                    $('.side-menu.secondary li').removeClass("hovered");
                    $(this).addClass("hovered");
                    if ($(this).hasClass("expand")) {
                        var id = $(this).attr('nav');
                        var label = $.trim($(this).text());
                        var parent = $(this).attr('parent');
                        var subnav = getSubnav(id, parent);
                        var subnavHtml = generateSubnav(subnav, label);
                        $('.side-menu.tertiary').attr("parent", id);
                        $('.side-menu.tertiary').html(subnavHtml);
                        $('.side-menu.tertiary').addClass('open');
                    }
                    $(".secondary .last").hover(function () {
                        $('.side-menu.tertiary').removeClass("open");
                    });
                }, function () {
                    if ($('.side-menu.tertiary').attr("parent") != $(this).attr('nav')) {
                        $(this).removeClass("hovered");
                        $('.side-menu.tertiary').removeClass("open");
                    }
                });
            }
        }, function () {
            if ($(this).attr("nav") != $('.side-menu.secondary').attr("parent")) {
                $(this).removeClass("hovered");
            }
        });
    } else {
        $('.side-menu.primary li').click(function () {
            $('.side-menu.primary li').removeClass("hovered");
            $('.side-menu.tertiary').removeClass('open');
            var id = $(this).attr('nav');
            var label = $.trim($(this).text());
            var parent = $(this).attr('parent');
            var subparent = $(this).attr('subparent');
            var subnav = getSubnav(id, parent, subparent);
            var subnavHtml = generateSubnav(subnav, label);
            if ($(this).hasClass("expand")) {
                $('.side-menu.primary').addClass('covered');
                $('.side-menu.secondary').attr('parent', $(this).attr("nav"));
                $('.side-menu.secondary').addClass('open');
                $('.side-menu.secondary').html(subnavHtml);
                $('.side-menu.secondary li').click(function () {
                    if ($(this).hasClass("expand")) {
                        $('.side-menu.secondary').addClass('covered');
                        var id = $(this).attr('nav');
                        var label = $.trim($(this).text());
                        var parent = $(this).attr('parent');
                        var subnav = getSubnav(id, parent);
                        var subnavHtml = generateSubnav(subnav, label);
                        $('.side-menu.tertiary').attr("parent", id);
                        $('.side-menu.tertiary').html(subnavHtml);
                        $('.side-menu.tertiary').addClass('open');
                    }
                    $(".secondary .last").click(function () {
                        $('.side-menu.tertiary').removeClass("open");
                    });
                });
            }
        });
    }
});
function generateSubnav(items, label) {
    var html = "<h2>" + label + "<div class='line'></div></h2>";
    var container = jQuery('<div/>');
    var list = jQuery("<ul/>").addClass("side-menu__items").appendTo(container);
    if (items) {
        list.attr('parent', items[0].parent);
    }
    jQuery.each(items, function (i, item) {
        var li = jQuery("<li/>");
        li.addClass("side-menu__items--item");

        li.attr("nav", item.id);
        li.attr("parent", item.parent);
        if (item.subparent) {
            li.attr("subparent", item.subparent);
        }
        var a = jQuery("<a/>");
        if (item.subnav) {
            li.addClass("expand");
            li.append("<div class='right-angle'></div>");
        } else {
            li.addClass("last");
        }
        a.text(item.label);
        a.appendTo(li);
        li.appendTo(list);
    });
    html += container.html();
    return html;
}
function navigationBehavior() {

}
function getSubnav(id, parent, subparent) {
    var subnav = [];
    jQuery.each(menu.main, function (i, item) {
        if (parent) {
            if (parent == item.id) {
                jQuery.each(item.subnav, function (i, subitem) {
                    if (subitem.id == id) {
                        subnav = subitem.subnav;
                        return;
                    }
                });
            }
        } else {
            if (item.id == id) {
                subnav = item.subnav;
            }
        }
    });
    return subnav;
}

jQuery('.dropdown-el').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    jQuery(this).toggleClass('expanded');
    jQuery('#' + $(e.target).attr('for')).prop('checked', true);
});
jQuery(document).click(function () {
    jQuery('.dropdown-el').removeClass('expanded');
});

/*
    JSON for menu items. Using this as a temporary solution
    to avoid an extremely large number of DOM nodes due to a large 
    number of menu items with subnav items with subnav items.

    This is for two reasons. 
    1. Performance
    2. Google frowns upon having a large number of nodes

    Once this is hooked up dynamically to a built in drupal
    menu another solution would probably need to be figured out
*/
var menu = {
    'main': [
        {
            'id': 'find_care',
            'url': '#',
            'label': 'Find Care',
            'subnav': [
                {
                    'id': 'services',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Services',
                    'subnav': [
                        {
                            'id': 'all_services',
                            'parent': 'services',
                            'url': '#',
                            'label': 'All Services A-Z'
                        },
                        {
                            'id': 'cancer',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Cancer'
                        },
                        {
                            'id': 'digestive_health',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Digestive Health'
                        },
                        {
                            'id': 'heart',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Heart'
                        },
                        {
                            'id': 'orthopaedics',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Orthopaedics'
                        },
                        {
                            'id': 'pediatric_services',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Pediatric Services'
                        },
                        {
                            'id': 'primary_care',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Primary Care'
                        },
                        {
                            'id': 'transplant',
                            'parent': 'services',
                            'url': '#',
                            'label': 'Transplant'
                        },
                    ],
                },
                {
                    'id': 'treatment_conditions',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Treatments and Conditions'
                },
                {
                    'id': 'tests_exams',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Tests & Exams'
                },
                {
                    'id': 'locations',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Locations'
                },
                {
                    'id': 'find_doctor',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Find a Doctor'
                },
                {
                    'id': 'schedule_appointment',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'Schedule and Appointment'
                },
                {
                    'id': 'ukhealthcare_portal',
                    'parent': 'find_care',
                    'url': '#',
                    'label': 'My UK HealthCare Portal'
                },
            ]
        },
        {
            'id': 'patient_resources',
            'url': '#',
            'label': 'Patient Resources',
            'subnav': [
                {
                    'parent': 'patient_resources',
                    'id': 'amenities_resources',
                    'url': '#',
                    'label': 'Amenities & Resources',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'appointment_request',
                    'url': '#',
                    'label': 'Appointment Request',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'become_patient',
                    'url': '#',
                    'label': 'Become a Patient',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'clinical_trials',
                    'url': '#',
                    'label': 'Clinical Trials',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'compliments_complaints',
                    'url': '#',
                    'label': 'Compliments & Complaints',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'find_a_doctor',
                    'url': '#',
                    'label': 'Find a Doctor',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'food_lodging',
                    'url': '#',
                    'label': 'Food & Lodging',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'insurance_billing',
                    'url': '#',
                    'label': 'Insurance & Billing',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'initerpreter_services',
                    'url': '#',
                    'label': 'Interpreter Services',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'maps_directions',
                    'url': '#',
                    'label': 'Maps & Directions',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'medical_records',
                    'url': '#',
                    'label': 'Medical Records',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'office_patient_experiences',
                    'url': '#',
                    'label': 'Office of Patient Experience',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'policy',
                    'url': '#',
                    'label': 'Policy',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'subscribe_healthmatters',
                    'url': '#',
                    'label': 'Subscribe to HealthMatters',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'thank_nurse',
                    'url': '#',
                    'label': 'Thank a Great Nurse',
                },
                {
                    'parent': 'patient_resources',
                    'id': 'uk_pharmacies',
                    'url': '#',
                    'label': 'UK Pharmacies',
                },
            ],
        },
        {
            'id': 'visitor_resources',
            'url': '#',
            'label': 'Visitor Resources',
            'subnav': [
                {
                    'parent': 'visitor_resources',
                    'id': 'amenities_resources',
                    'url': '#',
                    'label': 'Amenities & Resources A-Z',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'atms',
                    'url': '#',
                    'label': 'ATMs',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'food_lodging',
                    'url': '#',
                    'label': 'Food & Lodging',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'health_information_center',
                    'url': '#',
                    'label': 'Health Information Center',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'internet_access',
                    'url': '#',
                    'label': 'Internet Access & Wifi',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'interpreter_services',
                    'url': '#',
                    'label': 'Interpreter Services',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'mail_egreetings',
                    'url': '#',
                    'label': 'Mail & eGreetings',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'maps_directions',
                    'url': '#',
                    'label': 'Maps & Directions',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'pastoral_care',
                    'url': '#',
                    'label': 'Pastoral Care',
                },
                {
                    'parent': 'visitor_resources',
                    'id': 'patients_condition_number',
                    'url': '#',
                    'label': 'Patients Condition & Phone Number',
                }
            ],
        },
        {
            'id': 'locations',
            'url': '#',
            'label': 'Locations'
        },
        {
            'id': 'research',
            'url': '#',
            'label': 'Research',
            'subnav': [
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'All Research',
                    'id': 'all_research'
                },
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'Clinical Trials',
                    'id': 'clinical_trials'
                },
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'Cancer Researcher Directory',
                    'id': 'cancer_researcher_directory'
                },
                {
                    'parent': 'research',
                    'url': '#',
                    'label': 'Research Centers',
                    'id': 'research_centers'
                },
            ],
        },
        {
            'id': 'about',
            'url': '#',
            'label': 'About',
            'subnav': [
                {
                    'id': 'all_research',
                    'url': '#',
                    'label': 'All Research',
                    'parent': 'about'
                },
                {
                    'id': 'advanced_medicine',
                    'url': '#',
                    'label': 'Advanced Medicine',
                    'parent': 'about'
                },
                {
                    'id': 'awards_recognitions',
                    'url': '#',
                    'label': 'Awards & Recognitions',
                    'parent': 'about'
                },
                {
                    'id': 'best_doctors',
                    'url': '#',
                    'label': 'Best Doctors in America',
                    'parent': 'about'
                },
                {
                    'id': 'community_support',
                    'url': '#',
                    'label': 'Community Support',
                    'parent': 'about',
                    'subnav': [
                        {
                            'id': 'cooperative_extension_service',
                            'url': '#',
                            'label': 'Cooperative Extension Service'
                        },
                    ]
                },
                {
                    'id': 'directory',
                    'url': '#',
                    'label': 'Directory',
                    'parent': 'about'
                },
                {
                    'id': 'employment',
                    'url': '#',
                    'label': 'Employment',
                    'parent': 'about'
                },
                {
                    'id': 'leadership',
                    'url': '#',
                    'label': 'Leadership',
                    'parent': 'about'
                },
                {
                    'id': 'making_a_difference',
                    'url': '#',
                    'label': 'Making a Difference',
                    'parent': 'about'
                },
                {
                    'id': 'office_opioid_safety',
                    'url': '#',
                    'label': 'Office of Opioid Safety',
                    'parent': 'about'
                },
                {
                    'id': 'quality_safety',
                    'url': '#',
                    'label': 'Quality & Safety',
                    'parent': 'about'
                },
                {
                    'id': 'strategic_plan',
                    'url': '#',
                    'label': 'Strategic Plan',
                    'parent': 'about'
                },
                {
                    'id': 'arts_in_healthcare',
                    'url': '#',
                    'label': 'Arts in Healthcare',
                    'parent': 'about',
                    'subnav': []
                },
                {
                    'id': 'volunteer_or_observe',
                    'url': '#',
                    'label': 'Volunteer or Observe',
                    'parent': 'about',
                    'subnav': []
                },
                {
                    'id': 'dietetics_internship',
                    'url': '#',
                    'label': 'Dietetics Internship',
                    'parent': 'about'
                },
                {
                    'id': 'news',
                    'url': '#',
                    'label': 'News',
                    'parent': 'about'
                },
            ],
        },
        {
            'id': 'contact',
            'url': '#',
            'label': 'Contact'
        },
        {
            'id': 'give_now',
            'url': '#',
            'label': 'Give Now'
        },
    ]
};