/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Example4_12 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Arbitrary_Entailment_.28TBD.29 ',
'-->',
'',
'<!DOCTYPE Document [',
'<!ENTITY psoa  "http://psoa.ruleml.org/lang/spec#\">',
'<!ENTITY xs   "http://www.w3.org/2001/XMLSchema#\">',
'<!ENTITY rdf  "http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
']>',
'<Document xmlns=\"&psoa;\">',
'  <payload>',
'    <Group>',
'      <sentence>',
'        <Equal>',
'          <left>',
'            <Ind type=\"&xs;string\">a</Ind>',
'          </left>',
'          <right>',
'            <Ind type=\"&xs;string\">b</Ind>',
'          </right>',
'        </Equal>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');