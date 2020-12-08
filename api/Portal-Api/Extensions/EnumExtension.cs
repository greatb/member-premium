using Portal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;

namespace Portal.Extensions
{
    public static class EnumExtension
    {
        public static string GetDescription(this Enum value)
        {
            return
                value
                    .GetType()
                    .GetMember(value.ToString())
                    .FirstOrDefault()
                    ?.GetCustomAttribute<DescriptionAttribute>()
                    ?.Description
                ?? value.ToString();
        }

        public static IDictionary<int, string> ToDescripDictionary(this Enum enm)
        {
            return Enum.GetValues(enm.GetType())
                .Cast<object>()
                .ToDictionary(k => (int)k, v => ((Enum)v).GetDescription());
        }

        public static IList<SelectOption> ToOptionList(this IDictionary<int, string> dict)
        {
            return dict.Select(d => new SelectOption()
            {
                Id = d.Key,
                Name = d.Value
            }).ToList();
        }
    }
}
