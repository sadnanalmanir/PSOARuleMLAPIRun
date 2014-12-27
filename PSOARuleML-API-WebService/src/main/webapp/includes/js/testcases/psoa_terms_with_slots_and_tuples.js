var Example4_4 = [
             '<?xml version=\"1.0\" encoding=\"UTF-8\"?>',
             '',
             '<!-- ',
             '  http://wiki.ruleml.org/index.php/PSOA_RuleML#Psoa_terms_with_slots_and_tuples',
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
'            <Ind type=\"&psoa;local\">_f1</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">_family</Rel>',
'          </op>',
'          <args>',
'            <Ind type=\"&psoa;local\">_John</Ind>',
'            <Ind type=\"&psoa;local\">_Mary</Ind>',
'          </args>',
'          <slot>',
'            <Ind type=\"&psoa;local\">_child</Ind>',
'            <Ind type=\"&psoa;local\">_Tom</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;local\">_f2</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">_family</Rel>',
'          </op>',
'          <args>',
'            <Ind type=\"&psoa;local\">_Tom</Ind>',
'            <Ind type=\"&psoa;local\">_Jane</Ind>',
'          </args>',
'          <slot>',
'            <Ind type=\"&psoa;local\">_income</Ind>',
'            <Ind type=\"&xs;integer\">100000</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;local\">_f3</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">_family</Rel>',
'          </op>',
'          <args>',
'            <Ind type=\"&psoa;local\">_Mike</Ind>',
'            <Ind type=\"&psoa;local\">_Jessie</Ind>',
'          </args>',
'          <args>',
'            <Ind type=\"&xs;integer\">1951</Ind>',
'          </args>',
'          <slot>',
'            <Ind type=\"&psoa;local\">_child</Ind>',
'            <Ind type=\"&psoa;local\">_Fred</Ind>',
'          </slot>',
'          <slot>',
'            <Ind type=\"&psoa;local\">_child</Ind>',
'            <Ind type=\"&psoa;local\">_Jane</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'      <sentence>',
'        <Atom xmlns=\"&psoa;\">',
'          <oid>',
'            <Ind type=\"&psoa;local\">_Jane</Ind>',
'          </oid>',
'          <op>',
'            <Rel type=\"&psoa;local\">_Person</Rel>',
'          </op>',
'          <args>',
'            <Ind type=\"&psoa;local\">_female</Ind>',
'          </args>',
'          <args>',
'            <Ind type=\"&psoa;local\">_bcs</Ind>',
'            <Ind type=\"&psoa;local\">_mcs</Ind>',
'            <Ind type=\"&psoa;local\">_phd</Ind>',
'          </args>',
'          <slot>',
'            <Ind type=\"&psoa;local\">_job</Ind>',
'            <Ind type=\"&psoa;local\">_engineer</Ind>',
'          </slot>',
'        </Atom>',
'      </sentence>',
'    </Group>',
'  </payload>',
'</Document>'].join('\n');