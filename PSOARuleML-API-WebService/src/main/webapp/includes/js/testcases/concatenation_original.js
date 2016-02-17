/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Example4_23 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Concatenation',
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
'            <Var>first</Var>',
'          </declare>',
'          <declare>',
'            <Var>rest</Var>',
'          </declare>',
'          <declare>',
'            <Var>x</Var>',
'          </declare>',
'          <declare>',
'            <Var>y</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <Atom>',
'                  <op>',
'                    <Rel type="&psoa;local">concat</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Var>x</Var>',
'                    <Var>y</Var>',
'                  </Tuple>',
'                </Atom>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <op>',
'                    <Rel type="&psoa;local">concat</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">cns</Fun>',
'                      </op>',
'                      <Tuple>',
'                        <Var>first</Var>',
'                        <Var>rest</Var>',
'                      </Tuple>',
'                    </Expr>',
'			  <Var>x</Var>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">cns</Fun>',
'                      </op>',
'                      <Tuple>',
'                        <Var>first</Var>',
'                        <Var>y</Var>',
'                      </Tuple>',
'                    </Expr>',
'                  </Tuple>',
'                </Atom>',
'              </then>',
'            </Implies>',
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
'              <op>',
'                <Rel type="&psoa;local">concat</Rel>',
'              </op>',
'              <Tuple>',
'                <Ind type="&psoa;local">nil</Ind>',
'                <Var>x</Var>',
'                <Var>x</Var>',
'              </Tuple>',
'            </Atom>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');