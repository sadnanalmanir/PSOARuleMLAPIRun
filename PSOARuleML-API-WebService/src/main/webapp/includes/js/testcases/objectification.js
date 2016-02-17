/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Example4_13 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Objectification',
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
'        <Forall>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <declare>',
'            <Var>y</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <Atom>                    ',
'                  <op>',
'                    <Rel type="&psoa;local">f</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Var>x</Var>',
'                    <Var>y</Var>',
'                  </Tuple>',
'                </Atom>                    ',
'              </if>',
'              <then>',
'                <Atom>',
'                  <op>',
'                    <Rel type="&psoa;local">g</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Var>y</Var>',
'                    <Var>x</Var>',
'                  </Tuple>',
'                </Atom>',
'              </then>',
'            </Implies>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">f</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&psoa;local">a</Ind>',
'            <Ind type="&psoa;local">b</Ind>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');