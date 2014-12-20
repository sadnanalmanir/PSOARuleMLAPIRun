var Example4_3 = [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Multi-valued_Slot',
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
'            <Ind type=\"&psoa;iri\">_Adam</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;iri\">_Person</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;iri\">_father</Ind>',
'            <Ind type=\"&psoa;iri\">_John</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;iri\">_Jack</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;iri\">_Person</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;iri\">_father</Ind>',
'            <Ind type=\"&psoa;iri\">_John</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;iri\">_Tom</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;iri\">_Person</Rel>',
'          </op>',
'          <slot>',
'            <Ind type=\"&psoa;iri\">_father</Ind>',
'            <Ind type=\"&psoa;iri\">_John</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Forall>',
'          <declare>',
'            <Var>Ch</Var>',
'          </declare>',
'          <declare>',
'            <Var>M</Var>',
'          </declare>',
'          <formula>',
'            <Implies>',
'              <if>',
'                <Atom>',
'                  <oid>',
'                    <Var>Ch</Var>',
'                  </oid>',
'                  <op>',
'                    <Rel type=\"&psoa;iri\">_Person</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type=\"&psoa;iri\">_father</Ind>',
'                    <Var>M</Var>',
'                  </slot>',
'                </Atom>',
'              </if>',
'              <then>',
'                <Atom>',
'                  <oid>',
'                    <Var>M</Var>',
'                  </oid>',
'                  <op>',
'                    <Rel type=\"&psoa;iri\">_Male</Rel>',
'                  </op>',
'                  <slot>',
'                    <Ind type=\"&psoa;iri\">_child</Ind>',
'                    <Var>Ch</Var>',
'                  </slot>',
'                </Atom>',
'              </then>',
'            </Implies>',
'          </formula>',
'        </Forall>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');