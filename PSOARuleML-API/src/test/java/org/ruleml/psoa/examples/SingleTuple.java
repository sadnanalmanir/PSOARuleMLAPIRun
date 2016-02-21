/*
 * Copyright (C) 2016 sadnana
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package org.ruleml.psoa.examples;

import java.util.ArrayList;
import java.util.List;
import org.ruleml.psoa.absyntax.AbstractSyntax;
import org.ruleml.psoa.absyntax.DefaultAbstractSyntax;

/**
 *
 * @author sadnana
 */
public class SingleTuple {

    public static void main(String[] args) {

        DefaultAbstractSyntax das = new DefaultAbstractSyntax();

        AbstractSyntax.Term ind = das.createConst_Constshort("o1");
        AbstractSyntax.Term op = das.createConst_Constshort("p");
        AbstractSyntax.Term tuple1 = das.createConst_Constshort("a1");
        AbstractSyntax.Term tuple2 = das.createConst_Constshort("a2");
        System.out.println("" + tuple1);
        List<AbstractSyntax.Term> ts = new ArrayList<AbstractSyntax.Term>();
        ts.add(tuple1);
        ts.add(tuple2);
        //Iterable<Term> it = ts.toArray();
        //Tuple t1 = das.
        AbstractSyntax.Tuple tuple = das.createTuple(ts.subList(0, ts.size()));

        //Iterable<Tuple> ts = Arrays.asList(t1);
        List<AbstractSyntax.Tuple> t = new ArrayList<AbstractSyntax.Tuple>();
        t.add(tuple);

        AbstractSyntax.Psoa psoaTerm = das.createPsoa(ind, op, t, null);

        AbstractSyntax.Atom atom = das.createAtom(psoaTerm);

        AbstractSyntax.Clause clause = das.createClause(atom);

        AbstractSyntax.Rule rule = das.createRule(null, clause);

        List<AbstractSyntax.Sentence> ges = new ArrayList<AbstractSyntax.Sentence>();
        ges.add(rule);

        AbstractSyntax.Group group = das.createGroup(ges);

        AbstractSyntax.Document doc = das.createDocument(null, group);

        System.out.println("Translated document : \n" + doc);

    }

}
