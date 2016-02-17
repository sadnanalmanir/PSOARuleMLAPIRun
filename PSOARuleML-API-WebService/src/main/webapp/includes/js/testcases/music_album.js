/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Example4_25 = ['<?xml version=\"1.0" encoding=\"UTF-8"?>',
'',
'<!-- ',
'    http://wiki.ruleml.org/index.php/PSOA_RuleML#Music_Album',
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
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">o1</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">albsplitObj</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;local\">artist</Ind>',
'            <Ind type=\"&xs;string\">Van Morrison</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">title</Ind>',
'            <Ind type=\"&xs;string\">Astral Weeks</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">favorite</Ind>',
'            <Ind type=\"&xs;string\">Madame George</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">o2</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">albsplitObj</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;local\">artist</Ind>',
'            <Ind type=\"&xs;string\">Beatles</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">title</Ind>',
'            <Ind type=\"&xs;string\">Sgt. Pepper\'s</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">favorite</Ind>',
'            <Ind type=\"&xs;string\">A Day in the Life</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">o3</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">albsplitObj</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;local\">artist</Ind>',
'            <Ind type=\"&xs;string\">Beatles</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">title</Ind>',
'            <Ind type=\"&xs;string\">Abbey Road</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">favorite</Ind>',
'            <Ind type=\"&xs;string\">Something</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">o4</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">albsplitObj</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;local\">artist</Ind>',
'            <Ind type=\"&xs;string\">Rolling Stones</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">title</Ind>',
'            <Ind type=\"&xs;string\">Sticky Fingers</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">favorite</Ind>',
'            <Ind type=\"&xs;string\">Brown Sugar</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">o5</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">albmergeObj</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;local\">artist</Ind>',
'            <Ind type=\"&xs;string\">Eagles</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">tivorite</Ind>',
'            <Ind type=\"&xs;string\">Hotel California</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom>',
'          <oid>',
'            <Ind type=\"&psoa;local\">o6</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">albmergeObj</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;local\">artist</Ind>',
'            <Ind type=\"&xs;string\">Elton John</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">tivorite</Ind>',
'            <Ind type=\"&xs;string\">Goodbye Yellow Brick Road</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Subclass>',
'          <sub>',
'            <op>',
'              <Rel type="&psoa;local">albmergeObj</Rel>',
'            </op>',
'          </sub>',
'          <super>',
'            <op>',
'              <Rel type="&psoa;local">albsplitObj</Rel>',
'            </op>',
'          </super>',
'        </Subclass>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>OID</Var>',
'          </declare>',
'          <declare>',
'            <Var>Tivorite</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <Atom>',
'                  <oid>',
'                    <Var>OID</Var>',
'                  </oid>',
'                  <op>',
'                    <Rel type=\"&psoa;local\">albmergeObj</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type=\"&psoa;local\">title</Ind>',
'                    <Var>Tivorite</Var>',
'                  </slot>',
'                  <slot>',
'                    <Ind type=\"&psoa;local\">favorite</Ind>',
'                    <Var>Tivorite</Var>',
'                  </slot>',
'                </Atom>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <oid>',
'                    <Var>OID</Var>',
'                  </oid>',
'                  <op>',
'                    <Rel type=\"&psoa;local\">albsplitObj</Rel>',
'                  </op>',
'                  <Tuple>',
'                    <Var>X</Var>',
'                    <Var>Y</Var>',
'                  </Tuple>',
'                </Atom>',
'              </then>',
'            </Implies>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');