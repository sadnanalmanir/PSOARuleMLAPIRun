/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Example4_11 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',    
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Multiple_Entailment',
'-->',
'',
'<!DOCTYPE Document [',
'<!ENTITY psoa "http://psoa.ruleml.org/lang/spec#\">',
'<!ENTITY xs "http://www.w3.org/2001/XMLSchema#\">',
'<!ENTITY rdf "http://www.w3.org/1999/02/22-rdf-syntax-ns#\">',
']>',
'<Document xmlns=\"&psoa;\">',
'  <payload>',
'    <Group>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <formula>',
'            <Atom>',
'              <oid>',
'                <Ind type=\"&psoa;local\">o1</Ind>',
'              </oid>',
'              <op>',
'                <Rel type=\"&psoa;local\">p</Rel>',
'              </op>',
'              <args>',
'                <Ind type=\"&psoa;local\">a</Ind>',
'                <Var>x</Var>',
'              </args>',
'            </Atom>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <formula>',
'            <Atom>',
'              <oid>',
'                <Ind type=\"&psoa;local\">o1</Ind>',
'              </oid>',
'              <op>',
'                <Rel type=\"&psoa;local\">p</Rel>',
'              </op>',
'              <args>',
'                <Var>x</Var>',
'                <Ind type=\"&psoa;local\">b</Ind>',
'              </args>',
'            </Atom>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');