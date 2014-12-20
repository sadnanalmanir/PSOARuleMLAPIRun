//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.12.10 at 03:21:02 PM AST 
//


package org.ruleml.psoa.parser.jaxb;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://www.w3.org/2011/psoa#}declare" maxOccurs="unbounded"/>
 *         &lt;element name="formula">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;group ref="{http://www.w3.org/2011/psoa#}CLAUSE"/>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "declare",
    "formula"
})
@XmlRootElement(name = "Forall")
public class Forall {

    @XmlElement(required = true)
    protected List<Declare> declare;
    @XmlElement(required = true)
    protected Forall.Formula formula;

    /**
     * Gets the value of the declare property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the declare property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDeclare().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Declare }
     * 
     * 
     */
    public List<Declare> getDeclare() {
        if (declare == null) {
            declare = new ArrayList<Declare>();
        }
        return this.declare;
    }

    /**
     * Gets the value of the formula property.
     * 
     * @return
     *     possible object is
     *     {@link Forall.Formula }
     *     
     */
    public Forall.Formula getFormula() {
        return formula;
    }

    /**
     * Sets the value of the formula property.
     * 
     * @param value
     *     allowed object is
     *     {@link Forall.Formula }
     *     
     */
    public void setFormula(Forall.Formula value) {
        this.formula = value;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;group ref="{http://www.w3.org/2011/psoa#}CLAUSE"/>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "implies",
        "atom",
        "equal",
        "subclass"
    })
    public static class Formula {

        @XmlElement(name = "Implies")
        protected Implies implies;
        @XmlElement(name = "Atom")
        protected Atom atom;
        @XmlElement(name = "Equal")
        protected Equal equal;
        @XmlElement(name = "Subclass")
        protected Subclass subclass;

        /**
         * Gets the value of the implies property.
         * 
         * @return
         *     possible object is
         *     {@link Implies }
         *     
         */
        public Implies getImplies() {
            return implies;
        }

        /**
         * Sets the value of the implies property.
         * 
         * @param value
         *     allowed object is
         *     {@link Implies }
         *     
         */
        public void setImplies(Implies value) {
            this.implies = value;
        }

        /**
         * Gets the value of the atom property.
         * 
         * @return
         *     possible object is
         *     {@link Atom }
         *     
         */
        public Atom getAtom() {
            return atom;
        }

        /**
         * Sets the value of the atom property.
         * 
         * @param value
         *     allowed object is
         *     {@link Atom }
         *     
         */
        public void setAtom(Atom value) {
            this.atom = value;
        }

        /**
         * Gets the value of the equal property.
         * 
         * @return
         *     possible object is
         *     {@link Equal }
         *     
         */
        public Equal getEqual() {
            return equal;
        }

        /**
         * Sets the value of the equal property.
         * 
         * @param value
         *     allowed object is
         *     {@link Equal }
         *     
         */
        public void setEqual(Equal value) {
            this.equal = value;
        }

        /**
         * Gets the value of the subclass property.
         * 
         * @return
         *     possible object is
         *     {@link Subclass }
         *     
         */
        public Subclass getSubclass() {
            return subclass;
        }

        /**
         * Sets the value of the subclass property.
         * 
         * @param value
         *     allowed object is
         *     {@link Subclass }
         *     
         */
        public void setSubclass(Subclass value) {
            this.subclass = value;
        }

    }

}
