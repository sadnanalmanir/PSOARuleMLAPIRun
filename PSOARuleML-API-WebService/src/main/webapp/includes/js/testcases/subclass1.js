/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Example4_15 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Subclass_1',
'-->',
'',
'<!DOCTYPE Document [',
'<!ENTITY psoa  "http://psoa.ruleml.org/lang/spec#\">',
'<!ENTITY xs   "http://www.w3.org/2001/XMLSchema#\">',
'<!ENTITY rdf  "http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
']>',
'',
'<Document xmlns="&psoa;">',
'  <payload>',
'    <Group>',
'      <sentence>',
'        <Atom xmlns="&psoa;">',
'          <oid>',
'            <Ind type="&psoa;local">o1</Ind>',
'          </oid>',
'          <op>',
'            <Rel type="&psoa;local">c1</Rel>',
'          </op>',
'          <slot>',
'            <Ind type="&psoa;local">a1</Ind>',
'            <Ind type="&psoa;local">a2</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns="&psoa;">',
'          <oid>',
'            <Ind type="&psoa;local">o2</Ind>',
'          </oid>',
'          <op>',
'            <Rel type="&psoa;local">c1</Rel>',
'          </op>',
'          <slot>',
'            <Ind type="&psoa;local">p</Ind>',
'            <Ind type="&psoa;local">v</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Subclass>',
'          <sub>',
'            <op>',
'              <Rel type="&psoa;local">c1</Rel>',
'            </op>',
'          </sub>',
'          <super>',
'            <op>',
'              <Rel type="&psoa;local">c2</Rel>',
'            </op>',
'          </super>',
'        </Subclass>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');