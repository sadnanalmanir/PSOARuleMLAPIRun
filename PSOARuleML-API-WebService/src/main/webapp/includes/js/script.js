/*

My Custom JS
============

Author:  Mohammad Sadnan Al Manir
Updated: December 2014
Notes:	 custom js to load and interact with the Java web app via JSON

*/

             
             var Translate = "translate";
             var Slash = "/";             
             var converted2PSOAPSKB;
             var slash = function(s) {
                return Slash + s;
            }
            var append = function(s1, s2) {
                return s1 + s2;
            }
            var WS = "ws";
            var service = function(service) {
                return append(WS, slash(service));
            }
            var encode = encodeURIComponent;            
            var translate = function(kb, handler) {
                $.ajax({
                    type : "POST",
                    url : service(Translate),
                    data : JSON.stringify(translateRequest(kb)),
                    contentType : "application/json; charset=utf-8",
                    success : function(data) {
                        handler(data);
                    }
                });
            }
            var translateRequest = function(psoa) {
                var d = (psoa) ? psoa : "";                
                return {
                    document : d
                };
            }
            var psoaRuleMLXMLKB = function() {
                return $("#PSOARuleMLXMLKB").val();
            }
   
	    // Set the button handler functions
            $(document).ready(function() {

		// Load PSOA RuleML/XML Rulebases when selected
                $("#PSOARuleMLXMLKB").val(SamplePSOAKB);
                $("#testcase4_1Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_1);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_2Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_2);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_3Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_3);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_4Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_4);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_6Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_6);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_7Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_7);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_8Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_8);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_9Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_9);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
                $("#testcase4_15Btn").click(function() {
                    $("#PSOARuleMLXMLKB").val(Example4_15);
                    // enable the first tab (index starting at 0)
                    $('#tabs li:eq(0) a').tab('show');
                });
		// highlight the group PSOA RuleML/XML rulebase item  when selected
                $('.list-group-item').on('click',function(e){
                    var previous = $(this).closest(".list-group").children(".active");
                    previous.removeClass('active'); // previous list-item
                    $(e.target).addClass('active'); // activated list-item
                });
		// Method call for syntax conversion of PSOA RuleML/XML rulebase and showing results on another tab
                $('#transKBBtn').click(function() {
                    translate(encode(psoaRuleMLXMLKB()), function(result) {
                        converted2PSOAPSKB = result;
                        $("#PSOAPSKB").val(converted2PSOAPSKB);
                        //$("#tabs")
                        //$("#tabs").tabs('select', 1);
                        //alert('sucks');
                        //$('#myTab a:last').tab('show');
                        // enable the second tab (index starting at 0)
                        $('#tabs li:eq(1) a').tab('show');
                    });
                });              
		// Clear the input PSOA RuleML/XML rulebase
                $("#resetKBBtn").click(function() {
                    $("#PSOARuleMLXMLKB").val("");
                });
		// Load sample PSOA RuleML/XML rulebase
                $("#showSampleKBBtn").click(function() {
                    $("#PSOARuleMLXMLKB").val(SamplePSOAKB);
                });                
                //$("#tabs").tabs({
                //    disabled : [1, 2]
                //});
                //$("#tabs").tabs({
                  //  disabled : [1, 2]
                //});
            });

