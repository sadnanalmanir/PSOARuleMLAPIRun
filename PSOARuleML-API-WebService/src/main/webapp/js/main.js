            /* 
             * To change this template, choose Tools | Templates
             * and open the template in the editor.
             */

            /**
             * @author sadnana
             */

             var SamplePSOAKB = [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Single-tuple_psoa_term',
             '-->',
             '',
             '<!DOCTYPE Document [',
             '<!ENTITY psoa  \"http://www.w3.org/2011/psoa#\">',
             '<!ENTITY xs   \"http://www.w3.org/2001/XMLSchema#\">',
             '<!ENTITY rdf  \"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
             ']>',
             '',
             '<Document xmlns=\"&psoa;\">',
             '  <payload>',
             '    <Group>',
             '      <sentence>',
             '        <Atom>',
             '          <oid>',
             '            <Ind type="&psoa;iri">_o1</Ind>',
             '          </oid>',
             '          <op>',
             '            <Rel type="&xs;local">_p</Rel>',
             '          </op>',
             '          <args>',
             '            <Ind type="&psoa;iri">_a1</Ind>',
             '            <Ind type="&psoa;iri">_a2</Ind>',
             '          </args>',
             '        </Atom>',
             '      </sentence>',
             '    </Group>',
             '  </payload>',
             '</Document>'].join('\n');
             
             
             
             
             
             
             
             
             var Example4_15 = [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Inheritance',
             '-->',
             '',
             '<!DOCTYPE Document [',
             '<!ENTITY psoa  \"http://www.w3.org/2011/psoa#\">',
             '<!ENTITY xs   \"http://www.w3.org/2001/XMLSchema#\">',
             '<!ENTITY rdf  \"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
             ']>',
             '',
             '<Document xmlns=\"&psoa;\">',
'  <payload>',
'    <Group>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;iri\">_o1</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;iri\">_c1</Rel>',
'          </op>',
'          <args>',
'            <Ind type=\"&psoa;iri\">_a1</Ind>',
'            <Ind type=\"&psoa;iri\">_a2</Ind>',
'          </args>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;iri\">_o2</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;iri\">_c1</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;iri\">_p</Ind>',
'            <Ind type=\"&psoa;iri\">_v</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Subclass>',
'          <sub>',
'            <Ind type=\"&psoa;iri\">_c1</Ind>',
'          </sub>',
'          <super>',
'            <Ind type=\"&psoa;iri\">_c2</Ind>',
'          </super>',
'        </Subclass>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');
             var App = "psoa2tptp-trans";
             var Translate = "translate";
             var Slash = "/";
             var Equal = "=";
             var Amp = "&";
             var Qmark = "?";
             var Doc = "document";
             var Query = "query";
             var Execute = "execute";
             var nullf = function() {
             };
             var translatedKB;
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
            var htmlEncode = function(data) {
                return $('<div/>').text(data).html();
            }
            var htmlDecode = function(data) {
                return $('<div/>').html(data).text();
            }
            var param = function(key, val) {
                return append(key, append(Equal, val));
            }
            var amp = function(val) {
                return append(Amp, val);
            }
            var encode = encodeURIComponent;
            var qs = function(url, params) {
                query = append(url, Qmark);
                query += params.shift();
                for (p in params) {
                    query += amp(p);
                }
                return query;
            }
            var translate = function(kb, q, handler) {
                $.ajax({
                    type : "POST",
                    url : service(Translate),
                    data : JSON.stringify(translateRequest(kb, q)),
                    contentType : "application/json; charset=utf-8",
                    success : function(data) {
                        handler(data);
                    }
                });
            }
            var translateRequest = function(psoa, query) {
                var d = (psoa) ? psoa : "";
                var q = (query) ? query : "";
                return {
                    document : d,
                    query : q,
                    transType : transType()
                };
            }
            var executeQuery = function(handler) {
                $.ajax({
                    type : "POST",
                    contentType : "text/plain; charset=utf-8",
                    url : service(Execute),
                    data : tptpDoc(),
                    success : handler
                });
            }
            var psoaKB = function() {
                return $("#PSOAKB").val();
            }
            var tptpDoc = function() {
                return $("#tptpOutput").val();
            }
            var psoaQuery = function() {
                return $("#PSOAQuery").val();
            }
            var transType = function() {
                return $("input[name=translatorType]:checked").val();
            }
            var filter = function(result) {
                var filteredResult = "";
                var startIndex, endIndex = 0;
                do {
                    startIndex = result.lastIndexOf("%", result.indexOf("Proof ", endIndex));
                    endIndex = result.lastIndexOf("%", result.indexOf("Statistics", startIndex));
                    if (endIndex > 0)
                        filteredResult += result.substring(startIndex, endIndex);
                    else {
                        filteredResult += result.substring(startIndex);
                        break;
                    }
                } while (true);
                return filteredResult;
            }
            // Set the button handler functions
            $(document).ready(function() {

                $(function() {
                    $("#menu").menu();
                });
                $("#PSOAKB").val(SamplePSOAKB);
                $("#testcase4_1Btn").click(function() {
                    $("#PSOAKB").val(Example4_1);
                });
                $("#testcase4_2Btn").click(function() {
                    $("#PSOAKB").val(Example4_2);
                });
                $("#testcase4_3Btn").click(function() {
                    $("#PSOAKB").val(Example4_3);
                });
                $("#testcase4_4Btn").click(function() {
                    $("#PSOAKB").val(Example4_4);
                });
                $("#testcase4_6Btn").click(function() {
                    $("#PSOAKB").val(Example4_6);
                });
                $("#testcase4_7Btn").click(function() {
                    $("#PSOAKB").val(Example4_7);
                });
                $("#testcase4_8Btn").click(function() {
                    $("#PSOAKB").val(Example4_8);
                });
                $("#testcase4_9Btn").click(function() {
                    $("#PSOAKB").val(Example4_9);
                });
                $("#testcase4_15Btn").click(function() {
                    $("#PSOAKB").val(Example4_15);
                });
                $('#transKBBtn').click(function() {
                    translate(encode(psoaKB()), null, function(result) {
                        translatedKB = result;
                        $("#tptpOutput").val(translatedKB);
                        $("#tabs").tabs('enable', 1);
                        $("#tabs").tabs('select', 1);
                    });
                });
                $("#transQueryBtn").click(function() {
                    translate(null, encode(psoaQuery()), function(result) {
                        $("#tptpOutput").val(translatedKB + "\n" + result);
                    });
                });
                $("#resetKBBtn").click(function() {
                    $("#PSOAKB").val("");
                });
                $("#showSampleKBBtn").click(function() {
                    $("#PSOAKB").val(SamplePSOAKB);
                });
                $('#runQueryBtn').click(function() {
                    executeQuery(function(result) {
                        $("#vpOutput").val(filter(result));
                        $("#tabs").tabs('enable', 2);
                        $("#tabs").tabs('select', 2);
                    });
                });
                $("#tabs").tabs({
                    disabled : [1, 2]
                });
            });
