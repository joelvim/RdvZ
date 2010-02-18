
$(document).ready(function()
{
  $('.ok[title], .not_ok[title], .no_vote[title]').tooltip(
  {
    tip:'#comment',
    position : 'top right',
    offset : [-5,-50],
    lazy : true,
    delay : 0
  }
    );

   $(/*'.ok, .not_ok'*/'.to_comment').contextMenu('poll_menu', {
      menuStyle: {
        width: '120px'
      },
      bindings: {
        'comm': function(t) {
          $('#comment_form').dialog({
            width : 650,
            modal : true
            }) ;
          $('#comm_input').focus() ;
          }
      },
      onShowMenu: function(el,menu) {
      $('#comm_poll_id').val($(el.target).attr('id')) ;
      return menu ;
      }
    });

});