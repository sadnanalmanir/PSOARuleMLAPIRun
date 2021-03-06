/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Example4_19 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Factorial_2',
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
'          <declare>',
'            <Var>fx</Var>',
'          </declare>',
'          <declare>',
'            <Var>fy</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <And>',
'                  <formula>                    ',
'                    <Atom>                    ',
'                      <op>',
'                        <Rel type="&psoa;local">equal</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>fx</Var>',
'                        <Expr>',
'                          <op>',
'                            <Fun type="&psoa;local">factorial</Fun>',
'                          </op>',
'                          <Tuple>',
'                            <Var>x</Var>',
'                          </Tuple>',
'                        </Expr>',
'                      </Tuple>',
'                    </Atom>                    ',
'                  </formula>',
'                  <formula>                    ',
'                    <Atom>',
'                      <op>',
'                        <Rel type="&psoa;local">equal</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>fy</Var>',
'                        <Expr>',
'                          <op>',
'                            <Fun type="&psoa;local">multiply</Fun>',
'                          </op>',
'                          <Tuple>',
'                            <Var>fx</Var>',
'                            <Var>y</Var>',
'                          </Tuple>',
'                        </Expr>',
'                      </Tuple>',
'                    </Atom>',
'                  </formula>',
'                  <formula>                    ',
'                    <Atom>',
'                      <op>',
'                        <Rel type="&psoa;local">equal</Rel>',
'                      </op>',
'                      <Tuple>',
'                        <Var>y</Var>',
'                        <Expr>',
'                          <op>',
'                            <Fun type="&psoa;local">sum</Fun>',
'                          </op>',
'                          <Tuple>',
'                            <Var>x</Var>',
'                            <Ind type="&xs;integer">1</Ind>',
'                          </Tuple>',
'                        </Expr>',
'                      </Tuple>',
'                    </Atom>',
'                  </formula>',
'                </And>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <op>',
'                    <Rel type="&psoa;local">equal</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Var>fy</Var>',
'                    <Expr>',
'                      <op>',
'                        <Fun type="&psoa;local">factorial</Fun>',
'                      </op>',
'                      <Tuple>',
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
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">1</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">factorial</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">0</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">1</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">sum</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">0</Ind>',
'                <Ind type="&xs;integer">1</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">1</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">multiply</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">1</Ind>',
'                <Ind type="&xs;integer">1</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">2</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">sum</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">1</Ind>',
'                <Ind type="&xs;integer">1</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">2</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">multiply</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">1</Ind>',
'                <Ind type="&xs;integer">2</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">3</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">sum</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">2</Ind>',
'                <Ind type="&xs;integer">1</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">6</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">multiply</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">2</Ind>',
'                <Ind type="&xs;integer">3</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">4</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">sum</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">3</Ind>',
'                <Ind type="&xs;integer">1</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <op>',
'            <Rel type="&psoa;local">equal</Rel>',
'          </op>',
'          <Tuple>',
'            <Ind type="&xs;integer">24</Ind>',
'            <Expr>',
'              <op>',
'                <Fun type="&psoa;local">multiply</Fun>',
'              </op>',
'              <Tuple>',
'                <Ind type="&xs;integer">6</Ind>',
'                <Ind type="&xs;integer">4</Ind>',
'              </Tuple>',
'            </Expr>',
'          </Tuple>',
'        </Atom>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');