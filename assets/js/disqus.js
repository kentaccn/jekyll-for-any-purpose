/*
 * Disqus Plugin
 * ========================================================================== */
//var $disqus = jQuery.noConflict();
//var $showdsq = jQuery.noConflict();
var disqus_loaded = false;
var disqus_load_cache = 0;
$ /*disqus*/ (document).ready(function() {
    //"use strict"; // Start of use strict
    var disqus_shortname = 'kentaccn';

    /* * * DON'T EDIT BELOW THIS LINE * * */
    $ /*showdsq*/ ('#show-comments').on('click', function() {
        //$('#disqus_thread').show();
        var show_comment = document.getElementById('show-comments');

        if (disqus_load_cache == 1) {
            $('#show-comments').hide();
            $('#hide-comments').show();
            //document.getElementById('hide-comments').style.display = "block";
            $('#disqus_thread').show();
        } else {
            $('#disqus_thread').show();
            if (!disqus_loaded) {
                disqus_loaded = true;
                var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                disqus_load_cache = 1;
                // hide the button once comments load
                $(this).hide();
                $('#hide-comments').show();
                
            }
        }
    });

    $('#hide-comments').on('click', function() {
        disqus_loaded = false;
        $('#hide-comments').hide();
        $('#disqus_thread').hide();
        $('#show-comments').show();
    });
});
